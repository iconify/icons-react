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
		"content": `<style>.czq8efv3e {
  d: path("M8 13v8h8v-8");
}

.luzt4cbce {
  d: path("M12 13c0 -3 3 -6 6 -7 0 3 -2 6 -6 7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wlp3ibbib {
  d: path("M6 13h12");
}

.zzohglbtd {
  d: path("M12 13c0 -4 -3 -7 -6 -8 0 4 2 7 6 8");
}
</style><g class="nrj6p8qat"><path class="czq8efv3e"/><path class="wlp3ibbib"/><path class="zzohglbtd"/><path class="luzt4cbce"/></g>`,
		"fallback": "iconmind:plant-pot-outline-regular",
	});
}

export default Component;
