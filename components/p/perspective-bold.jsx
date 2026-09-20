import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.toxz0-jxr {
  fill: currentColor;
  d: path("M240 116h-12V48a20 20 0 0 0-23.58-19.67l-160 29.09A20 20 0 0 0 28 77.09V116H16a12 12 0 0 0 0 24h12v38.91a20 20 0 0 0 16.42 19.67l160 29.09A20 20 0 0 0 228 208v-68h12a12 12 0 0 0 0-24M52 80.43L204 52.8V116H52ZM204 203.2L52 175.57V140h152Z");
}
</style><path class="toxz0-jxr"/>`,
		"fallback": "ph:perspective-bold",
	});
}

export default Component;
