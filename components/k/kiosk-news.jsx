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

.mf-kq8bqj {
  d: path("m3.585 6.329l1-2A1.5 1.5 0 0 1 5.927 3.5h12.146a1.5 1.5 0 0 1 1.342.829l1 2A1.5 1.5 0 0 1 19.073 8.5H4.927a1.5 1.5 0 0 1-1.342-2.171");
}

.tc2m7movw {
  d: path("M10 11.25h4a1.5 1.5 0 0 1 1.5 1.5V14a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8.5 14v-1.25a1.5 1.5 0 0 1 1.5-1.5m2 0v4.25");
}

.yxm9t6wwy {
  d: path("M4.5 8.5v13h15v-13m-15 7h15");
}
</style><g class="hntgybcog"><path class="mf-kq8bqj"/><path class="yxm9t6wwy"/><path class="tc2m7movw"/></g>`,
		"fallback": "uix:kiosk-news",
	});
}

export default Component;
