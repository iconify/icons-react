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

.t6r1jgw6n {
  stroke-opacity: 0.4;
  d: path("M12 13v8m-3-4h6");
}

.vco3hvbdw {
  d: path("M7 8a5 5 0 1 0 10 0A5 5 0 0 0 7 8");
}
</style><g class="nrj6p8qat"><path class="t6r1jgw6n"/><path class="vco3hvbdw"/></g>`,
		"fallback": "coolicons:venus-duocolor-sharp",
	});
}

export default Component;
