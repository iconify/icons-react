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
		"content": `<style>.fa2e7y2tg {
  d: path("M4 17h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vj8si9dha {
  d: path("m16 4 4 4 -4 4");
}

.wfg0vmbgy {
  d: path("M15 17h5");
}

.zaau21ski {
  d: path("M8 4 4 8l4 4");
}
</style><g class="nrj6p8qat"><path class="zaau21ski"/><path class="vj8si9dha"/><path class="fa2e7y2tg"/><path class="wfg0vmbgy"/></g>`,
		"fallback": "iconmind:syntax-outline-regular",
	});
}

export default Component;
