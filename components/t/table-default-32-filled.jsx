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
		"content": `<style>.p_hod-0lp {
  fill: currentColor;
  d: path("M22 29h2.5a4.5 4.5 0 0 0 4.5-4.5V22h-7zm0-9h7v-8h-7zm-2-8v8h-8v-8zm2-2h7V7.5A4.5 4.5 0 0 0 24.5 3H22zm-2-7v7h-8V3zm0 19v7h-8v-7zm-10-2v-8H3v8zm0-10V3H7.5A4.5 4.5 0 0 0 3 7.5V10zm0 19v-7H3v2.5A4.5 4.5 0 0 0 7.5 29z");
}
</style><path class="p_hod-0lp"/>`,
		"fallback": "fluent:table-default-32-filled",
	});
}

export default Component;
