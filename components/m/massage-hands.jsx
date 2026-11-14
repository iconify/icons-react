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
		"content": `<style>.fo7df_oml {
  d: path("M4 17.25a8 3.5 0 1 0 16 0a8 3.5 0 1 0-16 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iv4ut96cm {
  d: path("M6 11a6 2.75 0 1 0 12 0a6 2.75 0 1 0-12 0");
}

.vy95tpqbe {
  d: path("M8.25 5.75a3.75 2.5 0 1 0 7.5 0a3.75 2.5 0 1 0-7.5 0");
}
</style><g class="hntgybcog"><path class="fo7df_oml"/><path class="iv4ut96cm"/><path class="vy95tpqbe"/></g>`,
		"fallback": "uix:massage-hands",
	});
}

export default Component;
