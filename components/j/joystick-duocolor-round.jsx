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
		"content": `<style>.jb3ap4bhw {
  stroke-opacity: 0.4;
  d: path("M12 15V9M9 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o0h_-bcbt {
  d: path("M3 18a3 3 0 0 1 3-3h12a3 3 0 0 1 0 6H6a3 3 0 0 1-3-3m4-3v-2");
}
</style><g class="nrj6p8qat"><path class="jb3ap4bhw"/><path class="o0h_-bcbt"/></g>`,
		"fallback": "coolicons:joystick-duocolor-round",
	});
}

export default Component;
