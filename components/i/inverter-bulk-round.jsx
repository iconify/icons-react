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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.jnlx1ibsq {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 7a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5Z");
}

.yzhi2sbbp {
  d: path("M7 11V9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2a1 1 0 0 1-.2.6a6 6 0 0 1-9.6 0A1 1 0 0 1 7 11m8-.354V9a.997.997 0 0 0-1-1h-4a.997.997 0 0 0-1 1v1.646a4 4 0 0 0 6 0M9 16h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="jnlx1ibsq"/><path class="yzhi2sbbp"/></g>`,
		"fallback": "coolicons:inverter-bulk-round",
	});
}

export default Component;
