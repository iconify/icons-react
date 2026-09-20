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
		"content": `<style>.dak2_9b1i {
  d: path("M8 9v8");
}

.eg0ecwbhj {
  d: path("M3 19.5h18");
}

.fyt8fyb5h {
  d: path("M16 9v8");
}

.hxoe7gx5p {
  d: path("M12 5v12");
}

.pek-tswzf {
  d: path("M4 13v4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x-egzxztr {
  d: path("M20 13v4");
}
</style><g class="s0phu2bbs"><path class="pek-tswzf"/><path class="dak2_9b1i"/><path class="hxoe7gx5p"/><path class="fyt8fyb5h"/><path class="x-egzxztr"/><path class="eg0ecwbhj"/></g>`,
		"fallback": "iconmind:score-distribution-outline-bold",
	});
}

export default Component;
