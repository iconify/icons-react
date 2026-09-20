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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jd_dotbnq {
  d: path("M6 2h12a2 2 0 0 1 2 2v15l-2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2V4a2 2 0 0 1 2 -2");
}

.mu5ehdgnc {
  d: path("M16 5v9");
}

.ots31sbwo {
  fill: currentColor;
  d: path("M6 2h12a2 2 0 0 1 2 2v15l-2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2V4a2 2 0 0 1 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.owfn5sxxm {
  d: path("M12 8v6");
}

.tqn4jcb4f {
  d: path("M8 11v3");
}
</style><g class="hntgybcog"><path class="ots31sbwo"/><path class="jd_dotbnq"/><path class="tqn4jcb4f"/><path class="owfn5sxxm"/><path class="mu5ehdgnc"/></g>`,
		"fallback": "iconmind:log-volume-duotone-thin",
	});
}

export default Component;
