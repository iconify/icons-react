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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.lb1jov5wm {
  stroke-opacity: 0.4;
  d: path("M19 19L10 19");
}

.u377ndgpk {
  d: path("M1.7191 4.7593L9.0001 11L1.6508 17.2993M15 9L22 9L22 14L15 14ZM16.5 9L16.5 7C16.5 5.8954 17.3954 5 18.5 5C19.6046 5 20.5 5.8954 20.5 7L20.5 9");
}
</style><g class="gp_8x1bzb"><path class="u377ndgpk"/><path class="lb1jov5wm"/></g>`,
		"fallback": "keyline-icons:terminal-lock-sharp-two-tone",
	});
}

export default Component;
