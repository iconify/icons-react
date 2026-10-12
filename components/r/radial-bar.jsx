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
		"content": `<style>.ct_505bdq {
  d: path("M12 9.5a2.5 2.5 0 0 1 2.5 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wguz1jb6r {
  d: path("M12 3.5A8.5 8.5 0 1 1 3.5 12");
}

.x3m23lb9h {
  d: path("M12 6.5a5.5 5.5 0 1 1-4.76 8.25");
}
</style><g class="hntgybcog"><path class="wguz1jb6r"/><path class="x3m23lb9h"/><path class="ct_505bdq"/></g>`,
		"fallback": "iconoven:radial-bar",
	});
}

export default Component;
