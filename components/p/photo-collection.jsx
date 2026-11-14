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
		"content": `<style>.aed39ydsm {
  d: path("M8 5.75V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-.75M2.5 18L7 13.5l4 4m1.5-5.25h.01");
}

.cvx8v2b2g {
  d: path("M2.5 8.5h14V20h-14Z");
}

.mq_1f0bod {
  d: path("M5.25 8.5v-.75a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cvx8v2b2g"/><path class="mq_1f0bod"/><path class="aed39ydsm"/></g>`,
		"fallback": "uix-sharp:photo-collection",
	});
}

export default Component;
