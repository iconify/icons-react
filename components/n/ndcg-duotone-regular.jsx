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
		"content": `<style>.ffw_pwyfz {
  d: path("M12.62 3.5a7 7 0 1 1 -5.24 0");
}

.idwtu_1-i {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M10 9v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ix1tbe7iy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13 10.5V13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jsj5j3bdw {
  d: path("M13 10.5V13");
}

.juh5olbuz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 7v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kfdmhd64i {
  d: path("m15 15 6 6");
}

.kikp0-sku {
  d: path("M10 9v4");
}

.lip701r7h {
  d: path("M7 7v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qa-jr78us {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m15 15 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vxtvt1e5w {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12.62 3.5a7 7 0 1 1 -5.24 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="vxtvt1e5w"/><path class="qa-jr78us"/><path class="juh5olbuz"/><path class="idwtu_1-i"/><path class="ix1tbe7iy"/><path class="ffw_pwyfz"/><path class="kfdmhd64i"/><path class="lip701r7h"/><path class="kikp0-sku"/><path class="jsj5j3bdw"/></g>`,
		"fallback": "iconmind:ndcg-duotone-regular",
	});
}

export default Component;
