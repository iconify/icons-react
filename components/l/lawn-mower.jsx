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
		"content": `<style>.e-y59dcnz {
  d: path("m8 11.75l-3.25-8.5H3m1.25 13v-2a2.5 2.5 0 0 1 2.5-2.5h8.5a4 4 0 0 1 4 4v.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m_ubk9bxa {
  cx: 7px;
  cy: 18.75px;
  r: 2.5px;
}

.vk0oucc3w {
  cx: 16.75px;
  cy: 18.75px;
  r: 2.5px;
}
</style><g class="hntgybcog"><path class="e-y59dcnz"/><circle class="m_ubk9bxa"/><circle class="vk0oucc3w"/></g>`,
		"fallback": "iconoven:lawn-mower",
	});
}

export default Component;
