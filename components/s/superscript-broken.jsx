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
		"content": `<style>.f925awy7d {
  d: path("M13.5 8L3 22");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ufp7cgw-j {
  d: path("M3 8L5.13 10.84");
}

.urf-do1-a {
  d: path("M17 3.8461C17 2.8265 17.8954 2 19 2C20.1046 2 21 2.8265 21 3.8461C21 4.8656 20.5634 5.356 19.7915 6.2571L17 9H21");
}

.uw7yjky9v {
  d: path("M7.16992 13.5601L13.4999 22.0001");
}
</style><g class="hntgybcog"><path class="ufp7cgw-j"/><path class="uw7yjky9v"/><path class="f925awy7d"/><path class="urf-do1-a"/></g>`,
		"fallback": "solar:superscript-broken",
	});
}

export default Component;
