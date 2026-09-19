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
		"content": `<style>.bm76hg5hb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.475 14.454l7.071 7.071a1 1 0 0 1 0 1.414L22.94 33.546a1 1 0 0 1-1.414 0l-7.071-7.07a1 1 0 0 1 0-1.415l10.607-10.607a1 1 0 0 1 1.414 0");
}

.mp2n3pboq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 24H32.486h.764a9.25 9.25 0 0 1 0 18.5H5.5V24h10.014h-.764a9.25 9.25 0 1 1 0-18.5H42.5z");
}
</style><path class="mp2n3pboq"/><path class="bm76hg5hb"/>`,
		"fallback": "arcticons:supermoney",
	});
}

export default Component;
