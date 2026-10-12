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
		"content": `<style>.h6_s9xbbb {
  d: path("M14.25 8a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 1 1 4.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ix1rbnbtt {
  cx: 12px;
  cy: 8px;
  r: 5.25px;
}

.r96tk1k6r {
  width: 18.5px;
  height: 5.5px;
  x: 2.75px;
  y: 15.75px;
  rx: 1.75px;
}

.vk3r73kuh {
  d: path("M6.5 15.75v2m4-2v2m4-2v2m4-2v2");
}
</style><g class="hntgybcog"><circle class="ix1rbnbtt"/><path class="h6_s9xbbb"/><rect class="r96tk1k6r"/><path class="vk3r73kuh"/></g>`,
		"fallback": "iconoven:tailor-tape",
	});
}

export default Component;
