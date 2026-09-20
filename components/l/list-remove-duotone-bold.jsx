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
		"content": `<style>.c54duacdo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 6h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.es4r-tbix {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 11h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iogxcvc1e {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 16h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jk6bn7bej {
  d: path("M15.5 12h6");
}

.ldkstzszf {
  d: path("M3 16h11");
}

.nrqy16b7j {
  d: path("M3 6h11");
}

.ok7vombsg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15.5 12h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qnmmmsbha {
  d: path("M3 11h11");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="c54duacdo"/><path class="es4r-tbix"/><path class="iogxcvc1e"/><path class="ok7vombsg"/><path class="nrqy16b7j"/><path class="qnmmmsbha"/><path class="ldkstzszf"/><path class="jk6bn7bej"/></g>`,
		"fallback": "iconmind:list-remove-duotone-bold",
	});
}

export default Component;
