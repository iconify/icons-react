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
		"content": `<style>.d3u3b8blq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4h4a4 4 0 0 1 4 4v1M9 20H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h4M4 9h16M4 15h5m3-11v5m1 8h8m-4-4v8");
}

.ft5dv1b6b {
  fill: none;
}

.to37adbyl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 8v1H9v11H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4");
}
</style><g class="ft5dv1b6b"><path class="to37adbyl"/><path class="d3u3b8blq"/></g>`,
		"fallback": "coolicons:table-plus-corner-duotone-round",
	});
}

export default Component;
