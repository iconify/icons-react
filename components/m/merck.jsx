import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x7ih4ib9r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.15 14.995c-1.783 0-7.204 8.858-14.15 8.858s-12.366-8.858-14.15-8.858H4.5v15.006a3.01 3.01 0 0 0 3.004 3.004H9.85v-5.163c0-2.018.986-3.05 2.992-3.05c3.203 0 7.474 7.227 11.158 7.227s7.955-7.227 11.158-7.227c2.006 0 2.992 1.032 2.992 3.05v2.16a3.004 3.004 0 0 0 3.003 3.003H43.5V17.103a2.11 2.11 0 0 0-2.108-2.108z");
}
</style><path class="x7ih4ib9r"/>`,
		"fallback": "arcticons:merck",
	});
}

export default Component;
