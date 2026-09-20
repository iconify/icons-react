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
		"content": `<style>.b_li-tbgg {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12.54 7.56a6 6 0 1 1 -5.08 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g04xkmgbk {
  d: path("M12.54 7.56a6 6 0 1 1 -5.08 0");
}

.hafotv34s {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 4h4l-4 4h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qcu95-bhb {
  d: path("M15 4h4l-4 4h4");
}
</style><g class="nrj6p8qat"><path class="b_li-tbgg"/><path class="hafotv34s"/><path class="g04xkmgbk"/><path class="qcu95-bhb"/></g>`,
		"fallback": "iconmind:sleeper-duotone-regular",
	});
}

export default Component;
