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
		"content": `<style>.b8y375b7s {
  fill: currentColor;
  d: path("M4 20a4 4 0 0 1 2 -7.5 5 5 0 0 1 9.5 -1.5 5.5 5.5 0 0 1 4.5 9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.htoy-r04r {
  d: path("M12 6a4 4 0 0 1 8 0");
}

.i13g5lbrq {
  d: path("m22 3.5 -2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pkd2_xalb {
  d: path("m10 3.5 2 2");
}

.uspjb2blh {
  d: path("M4 20a4 4 0 0 1 2 -7.5 5 5 0 0 1 9.5 -1.5 5.5 5.5 0 0 1 4.5 9Z");
}
</style><g class="nrj6p8qat"><path class="b8y375b7s"/><path class="htoy-r04r"/><path class="pkd2_xalb"/><path class="i13g5lbrq"/><path class="uspjb2blh"/></g>`,
		"fallback": "iconmind:mostly-cloudy-duotone-regular",
	});
}

export default Component;
