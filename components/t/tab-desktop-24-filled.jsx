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
		"content": `<style>.lg8hkxgcv {
  fill: currentColor;
  d: path("M11 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8h-7.75A2.25 2.25 0 0 1 11 5.75zm10 3.5V6a3 3 0 0 0-3-3h-5.5v2.75c0 .414.336.75.75.75z");
}
</style><path class="lg8hkxgcv"/>`,
		"fallback": "fluent:tab-desktop-24-filled",
	});
}

export default Component;
