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
		"content": `<style>.a2qxa8bns {
  d: path("m12.7 3.02l7.85 2.96q.7.27.7 1.02v9.75q0 .75-.7 1.03l-7.85 3.19q-.7.28-1.4 0l-7.85-3.19q-.7-.28-.7-1.03V7q0-.75.7-1.02l7.85-2.96q.7-.27 1.4 0");
}

.fax-h90di {
  d: path("m3 6.5l9 3.5l9-3.5M12 10v11M3 10l9 3.5l9-3.5m-5.75 10v-3.25l2-.75v3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a2qxa8bns"/><path class="fax-h90di"/></g>`,
		"fallback": "iconoven:kaaba",
	});
}

export default Component;
