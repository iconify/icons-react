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
		"content": `<style>.cvk-8id3g {
  d: path("M5 13V5a2 2 0 0 1 4 0v8a3.75 3.75 0 1 1-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j1nq9j1uj {
  fill: currentColor;
  d: path("M5.5 16.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.uli3sd04w {
  d: path("M17.5 8.5v11M13.75 12l7.5 4m-7.5 0l7.5-4m-5.5-3.5l1.75 1.75l1.75-1.75m-3.5 11l1.75-1.75l1.75 1.75");
}
</style><g class="hntgybcog"><path class="cvk-8id3g"/><path class="j1nq9j1uj"/><path class="uli3sd04w"/></g>`,
		"fallback": "uix:thermometer-cold",
	});
}

export default Component;
