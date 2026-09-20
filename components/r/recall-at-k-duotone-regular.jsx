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

.ieq7zkbal {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m7 10 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kfdmhd64i {
  d: path("m15 15 6 6");
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

.qzusxgb0b {
  d: path("m7 10 2 2 4 -4");
}

.vxtvt1e5w {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12.62 3.5a7 7 0 1 1 -5.24 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="vxtvt1e5w"/><path class="qa-jr78us"/><path class="ieq7zkbal"/><path class="ffw_pwyfz"/><path class="kfdmhd64i"/><path class="qzusxgb0b"/></g>`,
		"fallback": "iconmind:recall-at-k-duotone-regular",
	});
}

export default Component;
