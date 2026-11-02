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
		"content": `<style>.z-xidnbrq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6L6 8c-1.107.369-1.738 1.631-1 2l6 3l3 6c.369.738 1.631.107 2-1l4-12c.412-1.236-.764-2.412-2-2zm-1 7l3-3");
}
</style><path class="z-xidnbrq"/>`,
		"fallback": "coolicons:paper-plane",
	});
}

export default Component;
