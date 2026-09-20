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
		"content": `<style>.eeoxujb4a {
  d: path("m14 11 5 -5");
}

.h-ljjxb1p {
  d: path("M12 22v-9L5 6");
}

.izmrq5b4m {
  d: path("M5 10.5V6h4.5");
}

.klnb6rkjz {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 22v-9L5 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t_acrdr7w {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 10.5V6h4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vahijmbaa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m14 11 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="klnb6rkjz"/><path class="t_acrdr7w"/><path class="vahijmbaa"/><path class="h-ljjxb1p"/><path class="izmrq5b4m"/><path class="eeoxujb4a"/></g>`,
		"fallback": "iconmind:keep-left-duotone-bold",
	});
}

export default Component;
