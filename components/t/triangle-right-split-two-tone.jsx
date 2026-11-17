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
		"content": `<style>.cje9uqbcc {
  d: path("M20.089 20.153C20.651 19.608 21 18.845 21 18V4.503C21 3.167 19.384 2.497 18.439 3.442L10.941 10.941L3.442 18.439C2.497 19.384 3.167 21 4.503 21H18C18.812 21 19.549 20.677 20.089 20.153ZM10.941 10.941L20.089 20.153");
}

.iqcfptb3r {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17.732 2.735C19.307 1.161 22 2.276 22 4.503V18C22 19.126 21.533 20.145 20.785 20.871C20.066 21.569 19.082 22 18 22H4.503C2.276 22 1.161 19.307 2.735 17.732L10.218 10.249C10.224 10.243 10.229 10.236 10.235 10.23C10.241 10.224 10.248 10.219 10.254 10.213L17.732 2.735Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="iqcfptb3r"/><path class="cje9uqbcc"/></g>`,
		"fallback": "keyline-icons:triangle-right-split-two-tone",
	});
}

export default Component;
