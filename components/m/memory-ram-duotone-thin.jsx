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
		"content": `<style>.dtz07pcso {
  fill: currentColor;
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fmlaifbpn {
  d: path("M12 16v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l5z6qsb5o {
  d: path("M7 16v4");
}

.mmtudb-4h {
  d: path("M17 16v4");
}

.x2d2kybwe {
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="dtz07pcso"/><path class="x2d2kybwe"/><path class="l5z6qsb5o"/><path class="fmlaifbpn"/><path class="mmtudb-4h"/></g>`,
		"fallback": "iconmind:memory-ram-duotone-thin",
	});
}

export default Component;
