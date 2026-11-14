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
		"content": `<style>.d23j17bhi {
  d: path("M15 12v4.5a2 2 0 0 1-4 0");
}

.rr_vigbay {
  d: path("M2.5 2.5h19v19h-19ZM6 7h12M6 12h6.2M6 17h2.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rr_vigbay"/><path class="d23j17bhi"/></g>`,
		"fallback": "uix-sharp:slatwall-panel",
	});
}

export default Component;
