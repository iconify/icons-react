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
		"content": `<style>.a6ctoz2fm {
  d: path("M2.75 17.5a9.25 3.75 0 1 0 18.5 0a9.25 3.75 0 1 0-18.5 0");
}

.cwaj87brh {
  width: 2.5px;
  height: 5px;
  x: 8.25px;
  y: 3px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.reu_67o6j {
  d: path("M9.5 18.25c1.5.75 3.5.75 5 0m-8-3.76c0-2-.5-3.75-1.25-5.25m4.25 4.65V8m7 6.22q0-3.75 1.5-6.75");
}
</style><g class="hntgybcog"><path class="a6ctoz2fm"/><path class="reu_67o6j"/><rect class="cwaj87brh"/></g>`,
		"fallback": "iconoven:pond",
	});
}

export default Component;
