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
		"content": `<style>.cjzdtdb-a {
  d: path("M16 15h2.5");
}

.fb4zxqney {
  d: path("M12 15a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.h2-2dgnfu {
  d: path("M12 3v18");
}

.ln075ccaf {
  d: path("M16 12v3");
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="o_ssmh9ez"/><path class="h2-2dgnfu"/><path class="fb4zxqney"/><path class="ln075ccaf"/><path class="cjzdtdb-a"/></g>`,
		"fallback": "iconmind:time-zone-map-outline-bold",
	});
}

export default Component;
