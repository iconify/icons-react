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
		"content": `<style>.h3z-uye4u {
  d: path("m8 8 4 -4 4 4");
}

.ln4ysyo9j {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 4v17");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mnwr0qhch {
  d: path("M12 4v17");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yitei-bhk {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m8 8 4 -4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="ln4ysyo9j"/><path class="yitei-bhk"/><path class="mnwr0qhch"/><path class="h3z-uye4u"/></g>`,
		"fallback": "iconmind:straight-ahead-duotone-regular",
	});
}

export default Component;
