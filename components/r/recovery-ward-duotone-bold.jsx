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
		"content": `<style>.dezc-zb_n {
  d: path("M2 16.5h20");
}

.om3l78bic {
  d: path("M8 6a2 2 0 0 1 4 0 2 2 0 0 1 4 0l-4 4Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t3v74kb6y {
  d: path("M2 20v-7h20v7");
}

.tdv938_8v {
  fill: currentColor;
  d: path("M8 6a2 2 0 0 1 4 0 2 2 0 0 1 4 0l-4 4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="tdv938_8v"/><path class="t3v74kb6y"/><path class="dezc-zb_n"/><path class="om3l78bic"/></g>`,
		"fallback": "iconmind:recovery-ward-duotone-bold",
	});
}

export default Component;
