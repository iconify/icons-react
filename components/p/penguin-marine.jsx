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
		"content": `<style>.jfp9stxsi {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 20.25h15");
}

.qd3kuwb_m {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.85 5.5h.01m2.29 0h.01M12 7.75h.01");
}

.sq_qrd9ep {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9.75c-1.1 0-1.75 1.1-1.75 2.6s.65 2.6 1.75 2.6s1.75-1.1 1.75-2.6s-.65-2.6-1.75-2.6");
}

.xl6rvac0q {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c-2.6 0-3.9 2.1-3.9 4.6v2.4L6 13.5c-.4.65 0 1.25.65 1.05l1.45-.6v1c0 1.25 1.75 2.25 3.9 2.25s3.9-1 3.9-2.25v-1l1.45.6c.65.2 1.05-.4.65-1.05l-2.1-3.75v-2.4c0-2.5-1.3-4.6-3.9-4.6");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="xl6rvac0q"/><path class="sq_qrd9ep"/><path class="qd3kuwb_m"/><path class="jfp9stxsi"/></g>`,
		"fallback": "iconoven:penguin-marine",
	});
}

export default Component;
