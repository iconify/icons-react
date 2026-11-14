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
		"content": `<style>.zff87p_ji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5H13V6H2.5Zm1 3.5v13.5q0 .074.007.147t.022.146q.014.072.036.142q.021.071.049.139t.063.133t.076.126q.041.062.087.119q.047.057.099.109t.109.099t.119.087t.126.076t.133.063t.139.049t.142.036q.073.015.146.022T5 21h3.979M12 14.943V6m5 5l4.75 9.75h-9.5Zm0 3.25v2.5m0 2h.01");
}
</style><path class="zff87p_ji"/>`,
		"fallback": "uix-sharp:overdose-risk",
	});
}

export default Component;
