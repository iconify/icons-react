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
		"content": `<style>.qei46437j {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM12 2.5v2m9.5 7.5h-2M12 21.5v-2M2.5 12h2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ur4_zxypb {
  d: path("M12 7.5V12h3.5");
}
</style><g class="ulnmmdpxh"><path class="qei46437j"/><path class="ur4_zxypb"/></g>`,
		"fallback": "uix-sharp:schedule-time",
	});
}

export default Component;
