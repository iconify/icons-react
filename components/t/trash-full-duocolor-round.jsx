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
		"content": `<style>.cz5g47vfa {
  d: path("M6 6v11a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V6M4 6h16M8 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sju9b47kv {
  stroke-opacity: 0.4;
  d: path("M10 10v7m4-7v7");
}
</style><g class="nrj6p8qat"><path class="sju9b47kv"/><path class="cz5g47vfa"/></g>`,
		"fallback": "coolicons:trash-full-duocolor-round",
	});
}

export default Component;
