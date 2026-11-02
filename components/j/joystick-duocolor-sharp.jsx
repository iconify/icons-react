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

.u28jvld6q {
  d: path("M3 15h18v6H3Zm4 0v-2");
}
</style><g class="nrj6p8qat"><path class="jb3ap4bhw"/><path class="u28jvld6q"/></g>`,
		"fallback": "coolicons:joystick-duocolor-sharp",
	});
}

export default Component;
