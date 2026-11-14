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
		"content": `<style>.f7gqvkbki {
  d: path("M12 21.5A9.5 9.5 0 0 1 5.282 5.282");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jweqlabrt {
  d: path("M5.25 8V5.25H2.5M12 2.5a9.5 9.5 0 0 1 6.718 16.218");
}

.uycz6vb_c {
  d: path("M9.75 8.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M8.25 17a3.75 3.75 0 0 1 7.5 0");
}

.vr4ci77ox {
  d: path("M18.75 16v2.75h2.75");
}
</style><g class="hntgybcog"><path class="uycz6vb_c"/><path class="f7gqvkbki"/><path class="jweqlabrt"/><path class="vr4ci77ox"/></g>`,
		"fallback": "uix:lead-recycle",
	});
}

export default Component;
