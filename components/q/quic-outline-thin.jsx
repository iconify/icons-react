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
		"content": `<style>.a78831x8h {
  d: path("M2 5h6l4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l517yxbln {
  d: path("M12 9v6");
}

.lg40ofb3n {
  d: path("M2 19h6l4 -4");
}

.rzfubwb2e {
  d: path("M12 12h10");
}
</style><g class="hntgybcog"><path class="a78831x8h"/><path class="lg40ofb3n"/><path class="l517yxbln"/><path class="rzfubwb2e"/></g>`,
		"fallback": "iconmind:quic-outline-thin",
	});
}

export default Component;
