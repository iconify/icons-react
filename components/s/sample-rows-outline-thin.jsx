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
		"content": `<style>.a-yudr8sp {
  d: path("M8 9.5h13");
}

.ba_uovbta {
  d: path("M3.5 4a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.bz2_dqbae {
  d: path("M3.5 15.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qml5wxbjt {
  d: path("M8 21h13");
}

.rq7ulnb_u {
  d: path("M8 4h13");
}

.t6gygp83h {
  d: path("M8 15.5h13");
}
</style><g class="hntgybcog"><path class="rq7ulnb_u"/><path class="a-yudr8sp"/><path class="t6gygp83h"/><path class="qml5wxbjt"/><path class="ba_uovbta"/><path class="bz2_dqbae"/></g>`,
		"fallback": "iconmind:sample-rows-outline-thin",
	});
}

export default Component;
