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
		"content": `<style>.d1zyr9bfc {
  d: path("M12 4v4");
}

.ifv_d4f9e {
  d: path("M17 2v20");
}

.iyj_k-bwo {
  d: path("M12 11v4");
}

.jnf_2db5t {
  d: path("M12 18v3");
}

.oakk4fbrw {
  d: path("M7 2v20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="oakk4fbrw"/><path class="ifv_d4f9e"/><path class="d1zyr9bfc"/><path class="iyj_k-bwo"/><path class="jnf_2db5t"/></g>`,
		"fallback": "iconmind:runway-outline-bold",
	});
}

export default Component;
