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
		"content": `<style>.fj_wwx1rp {
  d: path("M5 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M16 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M5 15a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.jaaw_qdwq {
  d: path("M5.5 4.5h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-10Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jaaw_qdwq"/><path class="fj_wwx1rp"/></g>`,
		"fallback": "uix-sharp:microplate",
	});
}

export default Component;
