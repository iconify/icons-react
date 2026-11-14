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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nt6z33jcl {
  d: path("M13.587 3h4.788A2.625 2.625 0 0 1 21 5.625v4.788a2.63 2.63 0 0 1-.769 1.856l-6.875 6.875a2.625 2.625 0 0 1-3.712 0l-4.788-4.788a2.625 2.625 0 0 1 0-3.712l6.875-6.875A2.63 2.63 0 0 1 13.587 3");
}

.v2jzgr56j {
  d: path("M15 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="nt6z33jcl"/><path class="v2jzgr56j"/></g>`,
		"fallback": "uix:map-layer-labels",
	});
}

export default Component;
