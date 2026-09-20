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
		"content": `<style>.wuswmjfgy {
  fill: currentColor;
  d: path("M232 60h-20V48a12 12 0 0 0-12-12H56a12 12 0 0 0-12 12v12H24A20 20 0 0 0 4 80v16a44.05 44.05 0 0 0 44 44h.77A84.18 84.18 0 0 0 116 195.15V212H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24h-20v-16.89c30.94-4.51 56.53-26.2 67-55.11h1a44.05 44.05 0 0 0 44-44V80a20 20 0 0 0-20-20M28 96V84h16v28c0 1.21 0 2.41.09 3.61A20 20 0 0 1 28 96m160 15.1c0 33.33-26.71 60.65-59.54 60.9A60 60 0 0 1 68 112V60h120ZM228 96a20 20 0 0 1-16.12 19.62c.08-1.5.12-3 .12-4.52V84h16Z");
}
</style><path class="wuswmjfgy"/>`,
		"fallback": "ph:trophy-bold",
	});
}

export default Component;
