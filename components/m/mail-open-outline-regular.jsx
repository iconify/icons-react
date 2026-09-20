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
		"content": `<style>.ckawxab4i {
  d: path("m4 11 8 -8 8 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ujkepejes {
  d: path("m6 12 6 6 6 -6");
}

.zr5lbkq8n {
  d: path("M4 11v10h16V11");
}
</style><g class="nrj6p8qat"><path class="ckawxab4i"/><path class="zr5lbkq8n"/><path class="ujkepejes"/></g>`,
		"fallback": "iconmind:mail-open-outline-regular",
	});
}

export default Component;
