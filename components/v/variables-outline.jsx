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
		"content": `<style>.bp19homph {
  fill: currentColor;
  d: path("M4 16V8h16v8zm1-1h14V9H5zm0 0V9z");
}
</style><path class="bp19homph"/>`,
		"fallback": "material-symbols-light:variables-outline",
	});
}

export default Component;
