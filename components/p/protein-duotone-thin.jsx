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
		"content": `<style>.c7z9o8buo {
  d: path("M7 15h10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qo06t-bje {
  d: path("M7 21V8l2 -2h6l2 2v13Z");
}

.qvytntb8g {
  d: path("M7 10h10");
}

.w5h1e7d9p {
  fill: currentColor;
  d: path("M7 21V8l2 -2h6l2 2v13Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="w5h1e7d9p"/><path class="qo06t-bje"/><path class="qvytntb8g"/><path class="c7z9o8buo"/></g>`,
		"fallback": "iconmind:protein-duotone-thin",
	});
}

export default Component;
