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

.r5pfwdbos {
  stroke-opacity: 0.4;
  d: path("M15 9h6v6h-6");
}

.zneykhbxf {
  d: path("M3 7h12v10H3Zm6 4v2m12-1h-2");
}
</style><g class="nrj6p8qat"><path class="r5pfwdbos"/><path class="zneykhbxf"/></g>`,
		"fallback": "coolicons:security-key-duocolor-sharp",
	});
}

export default Component;
