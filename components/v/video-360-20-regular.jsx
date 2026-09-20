import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xczj33b8p {
  fill: currentColor;
  d: path("M11 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-4 1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m8 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M3.97 4.02A1.7 1.7 0 0 0 2 5.697v8.605a1.7 1.7 0 0 0 1.97 1.677a37.9 37.9 0 0 1 12.06 0A1.7 1.7 0 0 0 18 14.302V5.697a1.7 1.7 0 0 0-1.97-1.677a37.9 37.9 0 0 1-12.06 0M3 5.697a.7.7 0 0 1 .81-.69c4.1.662 8.28.662 12.38 0a.7.7 0 0 1 .81.69v8.605a.7.7 0 0 1-.81.69l-.19-.03v-1.963a1 1 0 0 0-1-1h-2v2.613a39 39 0 0 0-1-.065V12a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2.548q-.5.026-1 .065V12H5a1 1 0 0 0-1 1v1.963l-.19.03a.7.7 0 0 1-.81-.69z");
}
</style><path class="xczj33b8p"/>`,
		"fallback": "fluent:video-360-20-regular",
	});
}

export default Component;
