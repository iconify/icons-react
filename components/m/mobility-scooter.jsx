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
		"content": `<style>.fpufevaxf {
  d: path("M17 4v9.25H6M14.5 4H17M6 6v3h4M8 9v4.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m_gjb-bcb {
  cx: 16px;
  cy: 18.75px;
  r: 2.5px;
}

.m_ubk9bxa {
  cx: 7px;
  cy: 18.75px;
  r: 2.5px;
}
</style><g class="hntgybcog"><path class="fpufevaxf"/><circle class="m_ubk9bxa"/><circle class="m_gjb-bcb"/></g>`,
		"fallback": "iconoven:mobility-scooter",
	});
}

export default Component;
