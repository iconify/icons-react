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
		"content": `<style>.naekri9xt {
  d: path("M10 8L2 19M14 8L22 19");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u_o0irndn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 4H13C14.1046 4 15 4.895 15 6V8C15 9.105 14.1046 10 13 10H11C9.8954 10 9 9.105 9 8V6C9 4.895 9.8954 4 11 4H12Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="u_o0irndn"/><path class="naekri9xt"/></g>`,
		"fallback": "keyline-icons:vector-corner-fill",
	});
}

export default Component;
