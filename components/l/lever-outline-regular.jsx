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
		"content": `<style>.ia8_hqb_h {
  d: path("m9 14 5 5H4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ss_efzbzj {
  d: path("M16 6h5v5h-5Z");
}

.ubqbpfbgm {
  d: path("m3 8 6 6h12");
}
</style><g class="nrj6p8qat"><path class="ubqbpfbgm"/><path class="ia8_hqb_h"/><path class="ss_efzbzj"/></g>`,
		"fallback": "iconmind:lever-outline-regular",
	});
}

export default Component;
