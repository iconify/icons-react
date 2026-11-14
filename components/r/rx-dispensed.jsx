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
		"content": `<style>.g5k0f7-nm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h12v4H4Zm1 4v13q0 .074.007.147t.022.146q.014.072.036.142q.021.071.049.139t.063.133t.076.126q.041.062.087.119q.047.057.099.109t.109.099t.119.087t.126.076t.133.063t.139.049t.142.036q.073.015.146.022T6.5 21h7q.145 0 .287-.028M15 14.343V6.5M8 11h4m-4 4h2.5m4.25 3l2 2L21 15.75");
}
</style><path class="g5k0f7-nm"/>`,
		"fallback": "uix-sharp:rx-dispensed",
	});
}

export default Component;
