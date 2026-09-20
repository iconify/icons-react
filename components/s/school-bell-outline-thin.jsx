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
		"content": `<style>.g2cducv3h {
  d: path("M6 17a6 6 0 0 1 12 0Z");
}

.hjqc4kbvp {
  d: path("M10 8a2 2 0 0 1 4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k-jt90-vx {
  d: path("M11 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.rgv-6yb3g {
  d: path("M12 11V8");
}
</style><g class="hntgybcog"><path class="g2cducv3h"/><path class="rgv-6yb3g"/><path class="hjqc4kbvp"/><path class="k-jt90-vx"/></g>`,
		"fallback": "iconmind:school-bell-outline-thin",
	});
}

export default Component;
