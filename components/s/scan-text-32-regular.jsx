import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lgz07zbfx {
  fill: currentColor;
  d: path("M3 21a1 1 0 0 1 1 1v3.5A2.5 2.5 0 0 0 6.5 28H10a1 1 0 1 1 0 2H6.5A4.5 4.5 0 0 1 2 25.5V22a1 1 0 0 1 1-1m26 0a1 1 0 0 1 1 1v3.5a4.5 4.5 0 0 1-4.5 4.5H22a1 1 0 1 1 0-2h3.5a2.5 2.5 0 0 0 2.5-2.5V22a1 1 0 0 1 1-1m-12 0a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zm5-6a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM10 2a1 1 0 1 1 0 2H6.5A2.5 2.5 0 0 0 4 6.5V10a1 1 0 1 1-2 0V6.5A4.5 4.5 0 0 1 6.5 2zm12 7a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zm3.5-7A4.5 4.5 0 0 1 30 6.5V10a1 1 0 1 1-2 0V6.5A2.5 2.5 0 0 0 25.5 4H22a1 1 0 1 1 0-2z");
}
</style><path class="lgz07zbfx"/>`,
		"fallback": "fluent:scan-text-32-regular",
	});
}

export default Component;
