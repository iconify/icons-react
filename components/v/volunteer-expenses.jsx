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

.mxvneprdz {
  d: path("M11.635 20.181L10.5 19.5L8 21l-2.25-1.5L3.5 21V2.5h14v9.7M7 7h7m-7 4h7m-7 4h3.5");
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.pbrf5747u {
  d: path("M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="mxvneprdz"/><path class="pbrf5747u"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix:volunteer-expenses",
	});
}

export default Component;
