import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fr58rrbrc {
  fill: currentColor;
  d: path("M128 42a54 54 0 1 0 19.94 104.17l-33.17 58.88a6 6 0 1 0 10.46 5.89l49.54-88A54 54 0 0 0 128 42m0 96a42 42 0 1 1 42-42a42 42 0 0 1-42 42");
}
</style><path class="fr58rrbrc"/>`,
		"fallback": "ph:number-nine-light",
	});
}

export default Component;
