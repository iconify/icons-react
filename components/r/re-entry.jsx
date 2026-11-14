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
		"content": `<style>.r72zpdbjf {
  d: path("M13 2.5h6.5a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v2v-3fb_b {
  d: path("M4 3v6.5c0 3 2 4.5 5 4.5h6.5");
}

.zt08rubuz {
  d: path("M12.75 11.25L15.5 14l-2.75 2.75");
}
</style><g class="ulnmmdpxh"><path class="r72zpdbjf"/><path class="v2v-3fb_b"/><path class="zt08rubuz"/></g>`,
		"fallback": "uix-sharp:re-entry",
	});
}

export default Component;
