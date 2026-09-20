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

.n5m_-dbxl {
  fill: currentColor;
  d: path("M4 20c0 -9.6 6.4 -16 16 -16 0 9.6 -6.4 16 -16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ru4yg4kdx {
  d: path("M4 20c0 -9.6 6.4 -16 16 -16 0 9.6 -6.4 16 -16 16");
}

.txns4mbdu {
  d: path("m7 17 9 -9");
}
</style><g class="hntgybcog"><path class="n5m_-dbxl"/><path class="ru4yg4kdx"/><path class="txns4mbdu"/></g>`,
		"fallback": "iconmind:leaf-duotone-thin",
	});
}

export default Component;
