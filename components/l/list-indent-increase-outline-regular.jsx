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
		"content": `<style>.e4mg5wbxb {
  d: path("M3 9.5 5.5 12 3 14.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tee3b-ble {
  d: path("M10 12h11");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="nrj6p8qat"><path class="xgrfb-bqu"/><path class="tee3b-ble"/><path class="xyj-l9cjp"/><path class="e4mg5wbxb"/></g>`,
		"fallback": "iconmind:list-indent-increase-outline-regular",
	});
}

export default Component;
