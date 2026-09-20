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
		"content": `<style>.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.n7s5kzb5z {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M20 7v13H4V4h5l3 3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t5pp52bpq {
  d: path("m9 13 3 3 3 -3");
}

.wt_1bzbjm {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 13 3 3 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="n7s5kzb5z"/><path class="wt_1bzbjm"/><path class="bn_pu6j-z"/><path class="t5pp52bpq"/></g>`,
		"fallback": "iconmind:mcp-roots-duotone-regular",
	});
}

export default Component;
