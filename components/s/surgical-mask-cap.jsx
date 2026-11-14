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
		"content": `<style>.p9wwa_b6l {
  d: path("M6 13c2.5-1 3.5 1 6 0s3.5 1 6 0c1.25-.5 2.25-.25 3.25 0M6 14.5c-1.5 1-2.5 3-3.5 6m3.75-5.25C5.5 17 5.25 19 5.5 21.5");
}

.rh_nhlb5a {
  d: path("M6 16C6 9.5 9.25 4.5 14 4.5c4.25 0 7.25 3.5 7.25 8.5v3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rh_nhlb5a"/><path class="p9wwa_b6l"/></g>`,
		"fallback": "uix-sharp:surgical-mask-cap",
	});
}

export default Component;
