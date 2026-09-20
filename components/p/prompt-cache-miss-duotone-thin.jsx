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
		"content": `<style>.b4x_isbqv {
  d: path("M8 6H5v12h3");
}

.d_6ujebpi {
  d: path("M16 6h3v12h-3");
}

.e6eri9pjq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 6H5v12h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.flq2w3bwj {
  d: path("m9.5 9.5 5 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ta4vmeb9o {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16 6h3v12h-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tlaolnbzt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9.5 9.5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="e6eri9pjq"/><path class="ta4vmeb9o"/><path class="tlaolnbzt"/><path class="b4x_isbqv"/><path class="d_6ujebpi"/><path class="flq2w3bwj"/></g>`,
		"fallback": "iconmind:prompt-cache-miss-duotone-thin",
	});
}

export default Component;
