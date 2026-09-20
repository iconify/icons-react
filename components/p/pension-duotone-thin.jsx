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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ky4omnbla {
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
}

.m5hpqyobl {
  d: path("M9.5 9.5h5l-5 5h5Z");
}

.z_1z-qbos {
  fill: currentColor;
  d: path("M9.5 9.5h5l-5 5h5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="z_1z-qbos"/><path class="ky4omnbla"/><path class="m5hpqyobl"/></g>`,
		"fallback": "iconmind:pension-duotone-thin",
	});
}

export default Component;
