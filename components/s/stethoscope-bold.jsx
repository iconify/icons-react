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
		"content": `<style>.zjargwb6n {
  fill: currentColor;
  d: path("M248 160a40 40 0 1 0-52.64 37.94A28 28 0 0 1 168 220h-24a28 28 0 0 1-28-28v-37.1c31.73-5.78 56-34.09 56-67.73V40a12 12 0 0 0-12-12h-24a12 12 0 0 0 0 24h12v35.17c0 24.4-19.47 44.52-43.41 44.83A44 44 0 0 1 60 88V52h12a12 12 0 0 0 0-24H48a12 12 0 0 0-12 12v48a68 68 0 0 0 56 66.93V192a52.06 52.06 0 0 0 52 52h24a52.06 52.06 0 0 0 51.61-45.72A40.08 40.08 0 0 0 248 160m-40 16a16 16 0 1 1 16-16a16 16 0 0 1-16 16");
}
</style><path class="zjargwb6n"/>`,
		"fallback": "ph:stethoscope-bold",
	});
}

export default Component;
