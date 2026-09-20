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
		"content": `<style>.ot37jibbb {
  d: path("m10 16 4 -4");
}

.ry5l7ebuo {
  d: path("m5 17 3 -3 4 4 -3 3Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yigkywbyn {
  d: path("m8 14 8 -8 4 4 -8 8Z");
}
</style><g class="s0phu2bbs"><path class="yigkywbyn"/><path class="ry5l7ebuo"/><path class="ot37jibbb"/></g>`,
		"fallback": "iconmind:marker-pen-outline-bold",
	});
}

export default Component;
