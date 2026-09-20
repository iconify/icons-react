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
		"content": `<style>.f-52c6b3g {
  d: path("M4 10v10h16V10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pp54i94hx {
  d: path("M9.5 5.5 12 3l2.5 2.5");
}

.r_je2bdjk {
  d: path("M12 4v5");
}
</style><g class="nrj6p8qat"><path class="f-52c6b3g"/><path class="r_je2bdjk"/><path class="pp54i94hx"/></g>`,
		"fallback": "iconmind:outbox-outline-regular",
	});
}

export default Component;
