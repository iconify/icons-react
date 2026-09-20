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

.jqc-dlrxf {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.k2mg4f2ls {
  d: path("M15 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.koh8ckbdb {
  d: path("M5 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.r_je2bdjk {
  d: path("M12 4v5");
}

.rw6ho_bav {
  d: path("M2 9h20");
}
</style><g class="hntgybcog"><path class="jqc-dlrxf"/><path class="rw6ho_bav"/><path class="r_je2bdjk"/><path class="koh8ckbdb"/><path class="k2mg4f2ls"/></g>`,
		"fallback": "iconmind:school-bus-outline-thin",
	});
}

export default Component;
