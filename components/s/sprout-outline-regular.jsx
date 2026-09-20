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
		"content": `<style>.i30itkxpw {
  d: path("M12.5 13c0 -4.8 3.2 -8 8 -8 0 4.8 -3.2 8 -8 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ricsl-blc {
  d: path("M12 12v9");
}

.uy3jp_bjh {
  d: path("M3.5 13c0 -4.8 3.2 -8 8 -8 0 4.8 -3.2 8 -8 8");
}
</style><g class="nrj6p8qat"><path class="ricsl-blc"/><path class="uy3jp_bjh"/><path class="i30itkxpw"/></g>`,
		"fallback": "iconmind:sprout-outline-regular",
	});
}

export default Component;
