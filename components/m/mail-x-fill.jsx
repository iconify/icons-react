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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p_9eu4b7x {
  d: path("M12 20H5C3.34315 20 2 18.6569 2 17V7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V10M2 7L11.2929 11C11.7154 11.2817 12.2846 11.2817 12.7071 11L22 7M16 14L22 20M22 14L16 20");
}

.sj3q2nb3r {
  fill: currentColor;
  d: path("M2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7L12.7071 11C12.2846 11.2817 11.7154 11.2817 11.2929 11Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="sj3q2nb3r"/><path class="p_9eu4b7x"/></g>`,
		"fallback": "keyline-icons:mail-x-fill",
	});
}

export default Component;
