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
		"content": `<style>.nnf2v_bec {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.833 17.009s-7.945 4.136-4.38 15.97c0 0 2.477 12.473 19.83 10.257c6.762-.863 10.07-9.696 10.18-17.06c.105-7.011-1.876-10.04-7.834-11.377c-4.941-1.108-11.48 1.445-12.611 8.178s4.899 11.118 8.586 11.842s6.792.6 10.756-2.253M21.365 10.723s-.788-5.682 4.059-1.857m4.363.474S27.475 4.488 32.25 4.5s2.73 5.457 1.823 6.131");
}
</style><path class="nnf2v_bec"/>`,
		"fallback": "arcticons:quranapp",
	});
}

export default Component;
