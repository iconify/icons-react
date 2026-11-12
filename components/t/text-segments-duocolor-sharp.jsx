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

.xg9roobfw {
  d: path("M3 5h7v5H3Zm0 9h10v5H3Z");
}

.z_3d7nbol {
  stroke-opacity: 0.4;
  d: path("M14 5h7v5h-7Zm3 9h4v5h-4Z");
}
</style><g class="nrj6p8qat"><path class="z_3d7nbol"/><path class="xg9roobfw"/></g>`,
		"fallback": "coolicons:text-segments-duocolor-sharp",
	});
}

export default Component;
