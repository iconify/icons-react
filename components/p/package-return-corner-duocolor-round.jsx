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

.vl-elwbyh {
  stroke-opacity: 0.4;
  d: path("M21 13v2a2 2 0 0 1-2 2h-6m3-3l-3 3l3 3");
}

.ze3pu0b9j {
  d: path("M4 8v8a4 4 0 0 0 4 4M4 8l1-2c.613-1.226 1.774-2 3-2h8c1.226 0 2.387.774 3 2l1 2M4 8h16");
}
</style><g class="nrj6p8qat"><path class="vl-elwbyh"/><path class="ze3pu0b9j"/></g>`,
		"fallback": "coolicons:package-return-corner-duocolor-round",
	});
}

export default Component;
