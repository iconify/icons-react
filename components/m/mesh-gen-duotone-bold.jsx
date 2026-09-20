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
		"content": `<style>.d-_x6ccub {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 9v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dgfbh6b4z {
  d: path("M12 9v9");
}

.h2sq3fbpa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.j835zw5-z {
  d: path("M3 9h18");
}

.k7ro6rbzz {
  d: path("m3 18 9 -9 9 9");
}

.oq71y_3bz {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 9h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sswv2gbcf {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 18 9 -9 9 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="s0phu2bbs"><path class="oq71y_3bz"/><path class="h2sq3fbpa"/><path class="sswv2gbcf"/><path class="d-_x6ccub"/><path class="j835zw5-z"/><path class="xyj-l9cjp"/><path class="k7ro6rbzz"/><path class="dgfbh6b4z"/></g>`,
		"fallback": "iconmind:mesh-gen-duotone-bold",
	});
}

export default Component;
