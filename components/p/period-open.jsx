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
		"content": `<style>.g4q0dt5qu {
  d: path("M16.75 17.5v-2.75a2 2 0 0 1 4 0v.5");
}

.pe17-8b7q {
  d: path("M12.2 21H2.5V4.5H19V10M7 2.5v4m7.5-4v4m-12 3H19m-4 8h6.5V22H15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pe17-8b7q"/><path class="g4q0dt5qu"/></g>`,
		"fallback": "uix-sharp:period-open",
	});
}

export default Component;
