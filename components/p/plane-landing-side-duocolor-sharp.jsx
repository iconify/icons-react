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

.obqscbcxp {
  stroke-opacity: 0.4;
  d: path("M3 21h18");
}

.qwpvmxbti {
  d: path("m7 6l2 1l1.776-3.553A.81.81 0 0 1 11.5 3c.303 0 .577.18.697.46L15 10l5.447 2.724a1 1 0 0 1 .553.894v1.764a1 1 0 0 1-1.447.894L5.145 9.073a1 1 0 0 1-.26-.188L3.51 7.51a1 1 0 0 1-.188-1.155l.454-.908A.81.81 0 0 1 4.5 5h.264a1 1 0 0 1 .447.106z");
}
</style><g class="nrj6p8qat"><path class="obqscbcxp"/><path class="qwpvmxbti"/></g>`,
		"fallback": "coolicons:plane-landing-side-duocolor-sharp",
	});
}

export default Component;
