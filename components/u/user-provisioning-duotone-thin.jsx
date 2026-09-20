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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i-2dnzb7m {
  d: path("M12 14v6");
}

.ia4sldbfw {
  d: path("M3 21a9 9 0 0 1 18 0");
}

.kdybz_aht {
  d: path("M9 17h6");
}

.le41ikb_c {
  fill: currentColor;
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pemn838wn {
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="le41ikb_c"/><path class="pemn838wn"/><path class="ia4sldbfw"/><path class="i-2dnzb7m"/><path class="kdybz_aht"/></g>`,
		"fallback": "iconmind:user-provisioning-duotone-thin",
	});
}

export default Component;
