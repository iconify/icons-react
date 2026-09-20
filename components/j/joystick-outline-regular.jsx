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
		"content": `<style>.b_fzcqbeu {
  d: path("M5 20a7 7 0 0 1 14 0");
}

.b58isb55w {
  d: path("M12 6v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pq9ly31-r {
  d: path("M10 4a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="b_fzcqbeu"/><path class="b58isb55w"/><path class="pq9ly31-r"/></g>`,
		"fallback": "iconmind:joystick-outline-regular",
	});
}

export default Component;
