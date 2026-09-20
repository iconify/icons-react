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
		"content": `<style>.jw_47e9bv {
  fill: currentColor;
  d: path("M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m104 52H40a12 12 0 0 0 0 24h92a12 12 0 0 0 0-24m0 64H40a12 12 0 0 0 0 24h92a12 12 0 0 0 0-24m120-20a12 12 0 0 1-5.64 10.18l-64 40A12 12 0 0 1 164 200v-80a12 12 0 0 1 18.36-10.18l64 40A12 12 0 0 1 252 160m-34.64 0L188 141.65v36.7Z");
}
</style><path class="jw_47e9bv"/>`,
		"fallback": "ph:queue-bold",
	});
}

export default Component;
