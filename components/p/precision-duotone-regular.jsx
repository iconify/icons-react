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
		"content": `<style>.e7q8l6x6g {
  d: path("M6 14h5");
}

.esqrnvsht {
  d: path("M6 18h7.5");
}

.hfg-g6b7u {
  d: path("M6 10h7.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u6ckfiv0g {
  d: path("M6 6h5");
}

.z3eyrdd0c {
  d: path("M6 4a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.zwjmk5b0j {
  fill: currentColor;
  d: path("M6 4a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="zwjmk5b0j"/><path class="z3eyrdd0c"/><path class="u6ckfiv0g"/><path class="hfg-g6b7u"/><path class="e7q8l6x6g"/><path class="esqrnvsht"/></g>`,
		"fallback": "iconmind:precision-duotone-regular",
	});
}

export default Component;
