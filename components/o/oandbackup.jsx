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
		"content": `<style>.g18dnw2hf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.25 6.82L23.61 4.5L6.66 15.81v8l1.07.79v7.3l15.79 11.6l16.42-11.57v-7.24l1.4-1v-7.88l-4.54-2.9M27.25 4.5v5.72h-3.43l7.61 9.17L39 10.22h-3.39V4.5ZM6.66 23.84L22.79 35.7M6.66 15.81l16.13 11.86m17.15-2.98L22.79 35.7m18.55-19.89L22.79 27.67");
}
</style><path class="g18dnw2hf"/>`,
		"fallback": "arcticons:oandbackup",
	});
}

export default Component;
