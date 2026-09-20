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
		"content": `<style>.bdvry5jeq {
  d: path("m9 10.5 3 -3 3 3");
}

.edllzuogn {
  fill: currentColor;
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iaozfqbuj {
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
}

.qagp93bmg {
  d: path("m9 14 3 -3 3 3");
}

.qtxvlht3c {
  d: path("M8 17h8");
}
</style><g class="hntgybcog"><path class="edllzuogn"/><path class="iaozfqbuj"/><path class="bdvry5jeq"/><path class="qagp93bmg"/><path class="qtxvlht3c"/></g>`,
		"fallback": "iconmind:sev-two-duotone-thin",
	});
}

export default Component;
