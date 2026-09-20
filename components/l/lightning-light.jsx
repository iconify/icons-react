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
		"content": `<style>.zc10umb0f {
  fill: currentColor;
  d: path("M213.84 118.63a6 6 0 0 0-3.73-4.25l-59.23-22.21l15-75a6 6 0 0 0-10.27-5.27l-112 120a6 6 0 0 0 2.28 9.71l59.23 22.21l-15 75a6 6 0 0 0 3.14 6.52A6.1 6.1 0 0 0 96 246a6 6 0 0 0 4.39-1.91l112-120a6 6 0 0 0 1.45-5.46M106 220.46l11.85-59.28a6 6 0 0 0-3.77-6.8l-55.6-20.85l91.46-98l-11.82 59.29a6 6 0 0 0 3.77 6.8l55.6 20.85Z");
}
</style><path class="zc10umb0f"/>`,
		"fallback": "ph:lightning-light",
	});
}

export default Component;
