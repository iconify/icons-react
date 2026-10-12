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
		"content": `<style>.f23c_bb7d {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15 7.75l1.75 1.5L15.5 11m.25 3l1.75 1.25l-1.25 1.5");
}

.okr-m_bem {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.75 8h.01m-1.51 4.5h.01M8.75 16h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zlrmnabzq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75a9.25 9.25 0 0 0 0 18.5Zm0 0a9.25 9.25 0 0 1 0 18.5Z");
}
</style><g class="y9tr6bcfx"><path class="zlrmnabzq"/><path class="okr-m_bem"/><path class="f23c_bb7d"/></g>`,
		"fallback": "iconoven:skin-type",
	});
}

export default Component;
