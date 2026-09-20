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
		"content": `<style>.r4f2ows3v {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-5h16V6H4z");
}
</style><path class="r4f2ows3v"/>`,
		"fallback": "material-symbols-light:keyboard-full-outline-sharp",
	});
}

export default Component;
