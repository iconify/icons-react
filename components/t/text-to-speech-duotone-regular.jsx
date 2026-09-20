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
		"content": `<style>.bonttq6md {
  d: path("M2 9h8");
}

.clv7ge3so {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 9h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fufpzutyd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 13h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i4nzcmnch {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15.5 9.4a3 3 0 0 1 0 5.2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m-eroi64h {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17 6.8a6 6 0 0 1 0 10.4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nu8u0dbfs {
  d: path("M17 6.8a6 6 0 0 1 0 10.4");
}

.six8rqb9w {
  d: path("M15.5 9.4a3 3 0 0 1 0 5.2");
}

.u5fp3_7hb {
  d: path("M2 13h6");
}
</style><g class="nrj6p8qat"><path class="clv7ge3so"/><path class="fufpzutyd"/><path class="i4nzcmnch"/><path class="m-eroi64h"/><path class="bonttq6md"/><path class="u5fp3_7hb"/><path class="six8rqb9w"/><path class="nu8u0dbfs"/></g>`,
		"fallback": "iconmind:text-to-speech-duotone-regular",
	});
}

export default Component;
