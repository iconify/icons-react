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
		"content": `<style>.ia4sldbfw {
  d: path("M3 21a9 9 0 0 1 18 0");
}

.le41ikb_c {
  fill: currentColor;
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pemn838wn {
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s1pdfd1ij {
  d: path("M9.5 14.5 12 17l2.5 -2.5");
}

.szshe-6ah {
  d: path("M7 17h10");
}
</style><g class="nrj6p8qat"><path class="le41ikb_c"/><path class="pemn838wn"/><path class="ia4sldbfw"/><path class="szshe-6ah"/><path class="s1pdfd1ij"/></g>`,
		"fallback": "iconmind:pilot-duotone-regular",
	});
}

export default Component;
