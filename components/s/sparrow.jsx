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
		"content": `<style>.ak9-k8bah {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 6h.01");
}

.ho7mscbqk {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 6.75C5.75 4.5 7.25 3 9.25 3s3.5 1.5 3.5 3.5V7c3 1 5.25 3.5 6.25 6.5l2 2.5c.25.35 0 .8-.45.7L17 15.5c-1.25 1.25-3 2-5 2c-3.75 0-6.5-2.5-6.5-6c0-1.5.5-2.75 1.25-3.75c-.75-.35-1-.65-1-1");
}

.lduyu5p7g {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.85 5.5L3.5 7c-.4.2-.3.7.1.75l2.5.5Zm-3.1 15.75h18.5M10 17.5v3.75m3-3.75v3.75");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ho7mscbqk"/><path class="lduyu5p7g"/><path class="ak9-k8bah"/></g>`,
		"fallback": "iconoven:sparrow",
	});
}

export default Component;
