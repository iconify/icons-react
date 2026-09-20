import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t-c0xcbcx {
  fill: currentColor;
  d: path("M6 2v3h4V2zM5 6H2v4h3zm1 4V6h4v4zm-1 1H2v.5A2.5 2.5 0 0 0 4.5 14H5zm1 3h4v-3H6zm5 0v-3h3v.5a2.5 2.5 0 0 1-2.5 2.5zm3-8v4h-3V6zm0-1v-.5A2.5 2.5 0 0 0 11.5 2H11v3z");
}
</style><path class="t-c0xcbcx"/>`,
		"fallback": "fluent:puzzle-cube-16-filled",
	});
}

export default Component;
