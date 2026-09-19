import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vb7y69bfo {
  fill: currentColor;
  d: path("M6 19h12v2H6z");
}
</style><path class="vb7y69bfo"/>`,
		"fallback": "ic:twotone-minimize",
	});
}

export default Component;
