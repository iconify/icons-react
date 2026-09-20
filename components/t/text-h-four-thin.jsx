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
		"content": `<style>.motft14xc {
  fill: currentColor;
  d: path("M148 56v120a4 4 0 0 1-8 0v-56H44v56a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0v56h96V56a4 4 0 0 1 8 0m104 128a4 4 0 0 1-4 4h-12v20a4 4 0 0 1-8 0v-20h-52a4 4 0 0 1-3.16-6.46l56-72A4 4 0 0 1 236 112v68h12a4 4 0 0 1 4 4m-24-60.34L184.18 180H228Z");
}
</style><path class="motft14xc"/>`,
		"fallback": "ph:text-h-four-thin",
	});
}

export default Component;
