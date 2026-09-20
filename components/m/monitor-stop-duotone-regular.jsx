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
		"content": `<style>.jq9hovbrs {
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.m7p35uguv {
  d: path("M12 17v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qdn88l2uv {
  d: path("M7 20h10");
}

.t5v_djbzx {
  fill: currentColor;
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vy9dcmoep {
  fill: currentColor;
  d: path("M9.5 8h5v5h-5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x9279gjqs {
  d: path("M9.5 8h5v5h-5Z");
}
</style><g class="nrj6p8qat"><path class="t5v_djbzx"/><path class="vy9dcmoep"/><path class="jq9hovbrs"/><path class="m7p35uguv"/><path class="qdn88l2uv"/><path class="x9279gjqs"/></g>`,
		"fallback": "iconmind:monitor-stop-duotone-regular",
	});
}

export default Component;
