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
		"content": `<style>.cenf9z9qb {
  d: path("M8 5a4 4 0 0 1 8 0c0 5 -2 8 -4 8s-4 -3 -4 -8");
}

.e7fjltb5i {
  d: path("M12 13v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wsfzahu1x {
  fill: currentColor;
  d: path("M8 5a4 4 0 0 1 8 0c0 5 -2 8 -4 8s-4 -3 -4 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="wsfzahu1x"/><path class="cenf9z9qb"/><path class="e7fjltb5i"/></g>`,
		"fallback": "iconmind:spoon-duotone-regular",
	});
}

export default Component;
