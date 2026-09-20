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
		"content": `<style>.a9dl0vblp {
  d: path("M6 6v13");
}

.dt6efbtua {
  d: path("M9.5 6 12 8.5 14.5 6");
}

.du_3_4tit {
  d: path("M4 21.5h16");
}

.k6x6uv-ap {
  d: path("M12 11v8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s9l3g3b4l {
  d: path("M18 6v13");
}

.u8rhnqeij {
  d: path("M12 2.5V5");
}
</style><g class="s0phu2bbs"><path class="a9dl0vblp"/><path class="k6x6uv-ap"/><path class="s9l3g3b4l"/><path class="du_3_4tit"/><path class="u8rhnqeij"/><path class="dt6efbtua"/></g>`,
		"fallback": "iconmind:logit-bias-outline-bold",
	});
}

export default Component;
