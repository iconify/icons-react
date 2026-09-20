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
		"content": `<style>.fz6tc-4je {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 12h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o8scmcc3i {
  d: path("M3 12h10");
}

.q7wdp7bit {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m10 9 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vgx27qokn {
  d: path("M15 3h6v18h-6");
}

.vsmfi0bcq {
  d: path("m10 9 3 3 -3 3");
}

.z5sio_aje {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 3h6v18h-6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="z5sio_aje"/><path class="fz6tc-4je"/><path class="q7wdp7bit"/><path class="vgx27qokn"/><path class="o8scmcc3i"/><path class="vsmfi0bcq"/></g>`,
		"fallback": "iconmind:login-duotone-thin",
	});
}

export default Component;
