import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zrokgqbld {
  fill: currentColor;
  d: path("M6 6a4 4 0 1 0 0 8h8a4 4 0 0 0 0-8zm8 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4");
}
</style><path class="zrokgqbld"/>`,
		"fallback": "fluent:toggle-right-20-filled",
	});
}

export default Component;
