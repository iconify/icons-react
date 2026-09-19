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
		"content": `<style>.kmw3dls-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.075 19.36c.516-.02.907.447.698 1.287l-2.518 11.866c-.176.843-.73 1.117-1.391.655c-1.585-1.107-6.005-4.436-6.005-4.436a.182.182 0 0 1-.005-.292l6.942-6.265l-9.185 5.33a.2.2 0 0 1-.18.02l-3.696-1.153c-.82-.251-.825-.814.184-1.219l14.784-5.701a1 1 0 0 1 .372-.092");
}

.w_3gdjbek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.412 11c5.293-.29 10.8 2.76 12.63 9.75c10.375 1.408 9.484 15.304.06 16.27H13.275c-10.94-1.473-12.436-17.4 0-19.543A12.03 12.03 0 0 1 23.412 11m0 0");
}
</style><path class="kmw3dls-b"/><path class="w_3gdjbek"/>`,
		"fallback": "arcticons:uploadgram",
	});
}

export default Component;
