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
		"content": `<style>.mz5kvibtp {
  d: path("M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t8olluqaw {
  d: path("m7 21 3 -3h4l3 3");
}

.vxy4ztabh {
  d: path("M4 14h16");
}

.w5i79a2na {
  d: path("M12 14v4");
}
</style><g class="s0phu2bbs"><path class="mz5kvibtp"/><path class="vxy4ztabh"/><path class="w5i79a2na"/><path class="t8olluqaw"/></g>`,
		"fallback": "iconmind:office-chair-outline-bold",
	});
}

export default Component;
