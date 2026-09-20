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
		"content": `<style>.d88esignp {
  d: path("M8 13h8v8H8Z");
}

.f4b4cfbbo {
  d: path("M12 13V8");
}

.i6okezb6k {
  d: path("M12 8c0 -3 3 -5 7 -5 0 3 -3 5 -7 5");
}

.nl66y9men {
  d: path("M6 16h12");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x-ycuabua {
  d: path("M12 8c0 -4 -3 -6 -7 -6 0 4 3 6 7 6");
}
</style><g class="s0phu2bbs"><path class="d88esignp"/><path class="nl66y9men"/><path class="f4b4cfbbo"/><path class="x-ycuabua"/><path class="i6okezb6k"/></g>`,
		"fallback": "iconmind:self-care-outline-bold",
	});
}

export default Component;
