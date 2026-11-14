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
		"content": `<style>.bvbl-ubne {
  d: path("M2.5 20h19M12 20v-8m-8.5 4.5Q11-4 17.25 10");
}

.ug36w134b {
  d: path("M15.75 12.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bvbl-ubne"/><path class="ug36w134b"/></g>`,
		"fallback": "uix-sharp:lob-shot",
	});
}

export default Component;
