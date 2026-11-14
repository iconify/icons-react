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
		"content": `<style>.jtef_f0wp {
  d: path("M3 6.5h14.5v4H3ZM12.7 20H4v-9.5h12.5v3.3m-6.25-7.3V20m0-13.5C8 2.5 4.5 4 7.5 6.5m2.75 0C12.5 2.5 16 4 13 6.5M15.5 22v-2a3 3 0 0 1 3-3h3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xjnjb8b5w {
  d: path("M19.5 14.75L21.75 17l-2.25 2.25");
}
</style><g class="ulnmmdpxh"><path class="jtef_f0wp"/><path class="xjnjb8b5w"/></g>`,
		"fallback": "uix-sharp:reward-referral-code",
	});
}

export default Component;
