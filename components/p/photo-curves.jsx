import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bzl-r5b-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 42.5C5.5 32.283 13.783 24 24 24s18.5-8.283 18.5-18.5");
}

.j5igqi6wt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 5.5C32.283 5.5 24 13.783 24 24M5.5 42.5C15.717 42.5 24 34.217 24 24");
}

.xky2mmbxr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 5.5c0 20.435-16.565 37-37 37c0-20.435 16.565-37 37-37");
}
</style><path class="j5igqi6wt"/><path class="xky2mmbxr"/><path class="bzl-r5b-r"/>`,
		"fallback": "arcticons:photo-curves",
	});
}

export default Component;
