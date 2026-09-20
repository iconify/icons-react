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
		"content": `<style>.fwyf93qcw {
  d: path("M8 8v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iymet_cml {
  d: path("M15.5 4H19a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V8l4 -4h3.5");
}

.luzoskb2e {
  d: path("M16 8v6");
}

.owfn5sxxm {
  d: path("M12 8v6");
}

.taxmbub4q {
  d: path("M6 17h12");
}

.y1z1czbul {
  fill: currentColor;
  d: path("M15.5 4H19a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V8l4 -4h3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="y1z1czbul"/><path class="iymet_cml"/><path class="fwyf93qcw"/><path class="owfn5sxxm"/><path class="luzoskb2e"/><path class="taxmbub4q"/></g>`,
		"fallback": "iconmind:k-anonymity-duotone-thin",
	});
}

export default Component;
