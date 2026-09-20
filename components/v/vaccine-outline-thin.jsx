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
		"content": `<style>.dbb3ymiyd {
  d: path("M9 7V4h6v3");
}

.gcalxb98a {
  d: path("M8 13h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j9schwodo {
  d: path("M8 7v13h8V7Z");
}
</style><g class="hntgybcog"><path class="j9schwodo"/><path class="dbb3ymiyd"/><path class="gcalxb98a"/></g>`,
		"fallback": "iconmind:vaccine-outline-thin",
	});
}

export default Component;
