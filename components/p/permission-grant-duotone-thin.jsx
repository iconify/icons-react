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
		"content": `<style>.aw36cedja {
  d: path("M16 15h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.my8ijhbaa {
  d: path("M4 10a4 4 0 0 1 8 0");
}

.qton9kw2t {
  fill: currentColor;
  d: path("M2 12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.w7sxxlcqv {
  d: path("m18 12 3 3 -3 3");
}

.y7uqdfbgj {
  d: path("M2 12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="qton9kw2t"/><path class="y7uqdfbgj"/><path class="my8ijhbaa"/><path class="aw36cedja"/><path class="w7sxxlcqv"/></g>`,
		"fallback": "iconmind:permission-grant-duotone-thin",
	});
}

export default Component;
