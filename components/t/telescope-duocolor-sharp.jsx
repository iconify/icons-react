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

.nuvbu6bqy {
  stroke-opacity: 0.4;
  d: path("M12 11L7 21m5-10l5 10");
}

.t8q_ld_2l {
  d: path("m4 10l14-7l2 4l-14 7zm10-5l2 4");
}
</style><g class="nrj6p8qat"><path class="nuvbu6bqy"/><path class="t8q_ld_2l"/></g>`,
		"fallback": "coolicons:telescope-duocolor-sharp",
	});
}

export default Component;
