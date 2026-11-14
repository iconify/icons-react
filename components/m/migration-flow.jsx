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
		"content": `<style>.pctqrl3gt {
  d: path("m18.5 9.25l2 1.25l1.25-2m-1.25 5c-1.5 7-15.5 7-17 0");
}

.px1gu3yub {
  d: path("M3.5 10.5c1.5-7 15.5-7 17 0");
}

.ud2s7b0nb {
  d: path("m2.25 15.5l1.25-2l2 1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="px1gu3yub"/><path class="pctqrl3gt"/><path class="ud2s7b0nb"/></g>`,
		"fallback": "uix-sharp:migration-flow",
	});
}

export default Component;
