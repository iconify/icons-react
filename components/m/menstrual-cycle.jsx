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
		"content": `<style>.jw73fgbpu {
  d: path("M16.982 7.563a7.75 7.75 0 1 1-9.964 0");
}

.rfthxzl-h {
  fill: currentColor;
  d: path("M12 2.25C13.5 4 14.25 5 14.25 6c0 1.25-1 2.25-2.25 2.25S9.75 7.25 9.75 6c0-1 .75-2 2.25-3.75Z");
}

.rno_0wblq {
  d: path("M5.5 6.5L7 8l2.25-.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jw73fgbpu"/><path class="rno_0wblq"/><path class="rfthxzl-h"/></g>`,
		"fallback": "uix-sharp:menstrual-cycle",
	});
}

export default Component;
