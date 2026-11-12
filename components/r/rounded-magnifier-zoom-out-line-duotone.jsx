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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l_z2a8vzi {
  cx: 11px;
  cy: 11px;
  r: 9px;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.yewbpls5v {
  d: path("M21.4094 21.4094C21.636 21.1828 21.7493 21.0695 21.812 20.9748C22.1793 20.4202 21.99 19.6699 21.4036 19.3559C21.3035 19.3023 21.15 19.2563 20.843 19.1643C20.5075 19.0638 20.3398 19.0136 20.2218 19.0038C19.5268 18.9466 18.9466 19.5268 19.0038 20.2218C19.0136 20.3398 19.0638 20.5076 19.1643 20.843C19.2563 21.15 19.3023 21.3035 19.3559 21.4036C19.6699 21.99 20.4202 22.1793 20.9748 21.812C21.0695 21.7493 21.1828 21.636 21.4094 21.4094Z");
}

.yfn9xdb5n {
  d: path("M9 11H11H13");
}
</style><g class="ipq1z-bjh"><circle class="l_z2a8vzi"/><path class="yfn9xdb5n"/><path class="yewbpls5v"/></g>`,
		"fallback": "solar:rounded-magnifier-zoom-out-line-duotone",
	});
}

export default Component;
