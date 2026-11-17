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
		"content": `<style>.b51voob3x {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m7 6l2 1l1.776-3.553c.292-.582 1.156-.605 1.421.013L15 10l5.447 2.724a1 1 0 0 1 .553.894v1.764a1 1 0 0 1-1.447.894L5.145 9.073a1 1 0 0 1-.26-.188L3.51 7.51a1 1 0 0 1-.188-1.155l.454-.908A.81.81 0 0 1 4.5 5h.264c.155 0 .308.036.447.106Z");
}

.ft5dv1b6b {
  fill: none;
}

.szfgbd29s {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m7 6l2 1l1.776-3.553A.81.81 0 0 1 11.5 3c.303 0 .577.18.697.46L15 10l5.447 2.724a1 1 0 0 1 .553.894v1.764a1 1 0 0 1-1.447.894L5.145 9.073a1 1 0 0 1-.26-.188L3.51 7.51a1 1 0 0 1-.188-1.155l.454-.908A.81.81 0 0 1 4.5 5h.264a1 1 0 0 1 .447.106zM3 21h18");
}
</style><g class="ft5dv1b6b"><path class="b51voob3x"/><path class="szfgbd29s"/></g>`,
		"fallback": "coolicons:plane-landing-side-duotone-sharp",
	});
}

export default Component;
