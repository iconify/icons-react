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
		"content": `<style>.vcvgddzww {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 20h14v2H5zm7-13c-1.1 0-2 .9-2 2s.9 2 2 2a2 2 0 1 0 0-4m0-5c3.27 0 7 2.46 7 7.15c0 3.12-2.33 6.41-7 9.85c-4.67-3.44-7-6.73-7-9.85C5 4.46 8.73 2 12 2");
}
</style><path class="vcvgddzww"/>`,
		"fallback": "ic:sharp-pin-drop",
	});
}

export default Component;
