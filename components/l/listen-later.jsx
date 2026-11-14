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
		"content": `<style>.ebbevh_oa {
  d: path("M12 11v3.5h2.75");
}

.if3_8ub7b {
  d: path("M4 11.5a8 8 0 0 1 16 0m-17.5 0h3v6h-3Zm16 0h3v6h-3Z");
}

.oic8rwblz {
  d: path("M5.5 14.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="if3_8ub7b"/><path class="oic8rwblz"/><path class="ebbevh_oa"/></g>`,
		"fallback": "uix-sharp:listen-later",
	});
}

export default Component;
