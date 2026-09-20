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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ot37jibbb {
  d: path("m10 16 4 -4");
}

.ry5l7ebuo {
  d: path("m5 17 3 -3 4 4 -3 3Z");
}

.yigkywbyn {
  d: path("m8 14 8 -8 4 4 -8 8Z");
}
</style><g class="nrj6p8qat"><path class="yigkywbyn"/><path class="ry5l7ebuo"/><path class="ot37jibbb"/></g>`,
		"fallback": "iconmind:marker-pen-outline-regular",
	});
}

export default Component;
