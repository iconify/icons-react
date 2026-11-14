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

.ong-okbak {
  d: path("M12 18C8.5 15 8.5 5.5 12 3.5c3.5 2 3.5 11.5 0 14.5");
}

.r9hwqz4ot {
  d: path("M10.75 16.25C6 17 3 13 3.5 8.5c3 0 5 .75 6 2m3.75 5.75C18 17 21 13 20.5 8.5c-3 0-5 .75-6 2M12 18v3.5");
}
</style><g class="hntgybcog"><path class="ong-okbak"/><path class="r9hwqz4ot"/></g>`,
		"fallback": "uix:magnolia",
	});
}

export default Component;
