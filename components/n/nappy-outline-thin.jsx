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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l9z5uubso {
  d: path("M15 8V5h4v3");
}

.y62iljmfo {
  d: path("M5 8V5h4v3");
}

.yx2y4tasg {
  d: path("M5 8h14l-7 7Z");
}
</style><g class="hntgybcog"><path class="yx2y4tasg"/><path class="y62iljmfo"/><path class="l9z5uubso"/></g>`,
		"fallback": "iconmind:nappy-outline-thin",
	});
}

export default Component;
