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
		"content": `<style>.dqh2e367l {
  d: path("M10 11L14 11");
}

.fd641zcer {
  d: path("M11 8H13");
}

.ih2r9krfu {
  d: path("M12 16C9.23858 16 7 13.7614 7 11V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V11C17 13.7614 14.7614 16 12 16Z");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.obcs1cbgf {
  d: path("M12 19V22");
}

.ujrmgmblc {
  d: path("M20 10V11C20 15.4183 16.4183 19 12 19C7.58172 19 4 15.4183 4 11V10");
}
</style><g class="ipq1z-bjh"><path class="ih2r9krfu"/><path class="fd641zcer"/><path class="dqh2e367l"/><path class="ujrmgmblc"/><path class="obcs1cbgf"/></g>`,
		"fallback": "solar:microphone-3-linear",
	});
}

export default Component;
