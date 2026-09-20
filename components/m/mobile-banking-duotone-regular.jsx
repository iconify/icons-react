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
		"content": `<style>.by6r7ba-o {
  fill: currentColor;
  d: path("M10 12h4v6h-4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gyhtx7usr {
  d: path("M10 12h4v6h-4Z");
}

.mcubrkb2y {
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="by6r7ba-o"/><path class="mcubrkb2y"/><path class="gyhtx7usr"/></g>`,
		"fallback": "iconmind:mobile-banking-duotone-regular",
	});
}

export default Component;
