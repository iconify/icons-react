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
		"content": `<style>.eyuqbyjsv {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m90 102a89.6 89.6 0 0 1-22.29 59.22L68.78 60.29A89.95 89.95 0 0 1 218 128m-180 0a89.6 89.6 0 0 1 22.29-59.22l126.93 126.93A89.95 89.95 0 0 1 38 128");
}
</style><path class="eyuqbyjsv"/>`,
		"fallback": "ph:prohibit-light",
	});
}

export default Component;
