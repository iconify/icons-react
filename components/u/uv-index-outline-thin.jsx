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
		"content": `<style>.c5v_de02i {
  d: path("M7.5 8a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.c8wm-2bna {
  d: path("M9 17v4");
}

.e7aqn3bvb {
  d: path("M15 17v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ic_pehd5a {
  d: path("M3 17h18");
}

.jfcsmebdz {
  d: path("m4.5 3.5 3 3");
}

.kqcu0mbfo {
  d: path("m19.5 3.5 -3 3");
}
</style><g class="hntgybcog"><path class="c5v_de02i"/><path class="jfcsmebdz"/><path class="kqcu0mbfo"/><path class="ic_pehd5a"/><path class="c8wm-2bna"/><path class="e7aqn3bvb"/></g>`,
		"fallback": "iconmind:uv-index-outline-thin",
	});
}

export default Component;
