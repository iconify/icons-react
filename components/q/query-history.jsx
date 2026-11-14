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
		"content": `<style>.j2folwb0w {
  d: path("m14.25 15.5l.5 1.75l1.75-.5m1.5-.25V18l1 .75");
}

.nf-q7edtv {
  d: path("M12.8 20.5H2.5v-17h19v9.6m-19-5.35h19");
}

.ujwbqxb0p {
  d: path("M7 10.5L4.5 13L7 15.5m3.5-5.5l-1.75 6m3.5-5.5l2.051 2.051m.884 3.824a3.25 3.25 0 1 1 1.19 4.44");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nf-q7edtv"/><path class="ujwbqxb0p"/><path class="j2folwb0w"/></g>`,
		"fallback": "uix-sharp:query-history",
	});
}

export default Component;
