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
		"content": `<style>.a4w3m-uwg {
  d: path("m16 12 2.5 2.5L22 11");
}

.anztxob1m {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m16 12 2.5 2.5L22 11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ashjd6b6l {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 16h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ldkstzszf {
  d: path("M3 16h11");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nrqy16b7j {
  d: path("M3 6h11");
}

.qnmmmsbha {
  d: path("M3 11h11");
}

.vul_uwbfe {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 6h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wxx-lxpns {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 11h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="vul_uwbfe"/><path class="wxx-lxpns"/><path class="ashjd6b6l"/><path class="anztxob1m"/><path class="nrqy16b7j"/><path class="qnmmmsbha"/><path class="ldkstzszf"/><path class="a4w3m-uwg"/></g>`,
		"fallback": "iconmind:list-check-duotone-regular",
	});
}

export default Component;
