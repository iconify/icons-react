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
		"content": `<style>.evsyf28fy {
  fill: currentColor;
  d: path("M10 16c2.69 0 5.77 1.28 6 2H4c.2-.71 3.3-2 6-2");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.kutmos6dc {
  cx: 10px;
  cy: 8px;
  r: 2px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-3, 0.3);
}

.xc_030z1f {
  fill: currentColor;
  d: path("M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4s4-1.79 4-4m-2 0c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2M2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4m2 0c.2-.71 3.3-2 6-2c2.69 0 5.77 1.28 6 2zm13-8h6v2h-6z");
}
</style><path class="evsyf28fy"/><circle class="kutmos6dc"/><path class="xc_030z1f"/>`,
		"fallback": "ic:twotone-person-remove",
	});
}

export default Component;
