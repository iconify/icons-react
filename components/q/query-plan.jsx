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
		"content": `<style>.c4wcwljdq {
  d: path("M7 10.5L4.5 13L7 15.5m3.5-5.5l-1.75 6m3.5-5.5l2.192 2.192m-.303.919l-1.344 1.344M16.75 15a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM14 20.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.jqnf_ub0b {
  d: path("M18 16.25v1.5h-2.75v1.5m2.75-1.5h2.75v1.5");
}

.kqeekkb3o {
  d: path("M11.2 20.5H2.5v-17h19v9.1m-19-4.85h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kqeekkb3o"/><path class="c4wcwljdq"/><path class="jqnf_ub0b"/></g>`,
		"fallback": "uix-sharp:query-plan",
	});
}

export default Component;
