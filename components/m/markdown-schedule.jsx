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
		"content": `<style>.nc_mmcbkp {
  d: path("M14.5 15.25h7v6.5h-7Zm0 2.5h7m-5-3.75v1.75m3-1.75v1.75");
}

.rkti75iui {
  d: path("M11.7 19.5H8.5l-5-7.5l5-7.5h11v6.7M8.25 12h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rkti75iui"/><path class="nc_mmcbkp"/></g>`,
		"fallback": "uix-sharp:markdown-schedule",
	});
}

export default Component;
