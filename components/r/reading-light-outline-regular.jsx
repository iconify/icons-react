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
		"content": `<style>.jwxgs0b2c {
  d: path("m11 9 4 -4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pkfzzlbbg {
  d: path("M11 9v11");
}

.v4hj5197o {
  d: path("M10 9h8l-4 4Z");
}

.y--9wccrh {
  d: path("M5 20h12");
}
</style><g class="nrj6p8qat"><path class="y--9wccrh"/><path class="pkfzzlbbg"/><path class="jwxgs0b2c"/><path class="v4hj5197o"/></g>`,
		"fallback": "iconmind:reading-light-outline-regular",
	});
}

export default Component;
