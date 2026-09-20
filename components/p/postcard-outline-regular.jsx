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
		"content": `<style>.m_jk1nb0l {
  d: path("M5 11h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.okud9xj_d {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.vs9ju4bgh {
  d: path("M15 8h4v4h-4Z");
}

.zrqurcb-a {
  d: path("M5 15h8");
}
</style><g class="nrj6p8qat"><path class="okud9xj_d"/><path class="vs9ju4bgh"/><path class="m_jk1nb0l"/><path class="zrqurcb-a"/></g>`,
		"fallback": "iconmind:postcard-outline-regular",
	});
}

export default Component;
