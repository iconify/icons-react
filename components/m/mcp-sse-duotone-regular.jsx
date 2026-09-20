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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p7n2qqboc {
  d: path("M8 6h3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V9l3 -3Z");
}

.qm17m3bad {
  d: path("M18.95 7.05a7 7 0 0 1 0 9.9");
}

.sp96sbztl {
  fill: currentColor;
  d: path("M8 6h3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V9l3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ydygllq_h {
  d: path("M16.83 9.17a4 4 0 0 1 0 5.66");
}
</style><g class="nrj6p8qat"><path class="sp96sbztl"/><path class="p7n2qqboc"/><path class="ydygllq_h"/><path class="qm17m3bad"/></g>`,
		"fallback": "iconmind:mcp-sse-duotone-regular",
	});
}

export default Component;
