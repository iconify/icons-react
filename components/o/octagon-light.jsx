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
		"content": `<style>.tb7jo8w8c {
  fill: currentColor;
  d: path("M225.9 81.65L174.35 30.1a13.92 13.92 0 0 0-9.9-4.1h-72.9a13.92 13.92 0 0 0-9.9 4.1L30.1 81.65a13.92 13.92 0 0 0-4.1 9.9v72.9a13.92 13.92 0 0 0 4.1 9.9l51.55 51.55a13.92 13.92 0 0 0 9.9 4.1h72.9a13.92 13.92 0 0 0 9.9-4.1l51.55-51.55a13.92 13.92 0 0 0 4.1-9.9v-72.9a13.92 13.92 0 0 0-4.1-9.9m-7.9 82.8a2 2 0 0 1-.59 1.42l-51.55 51.54a2 2 0 0 1-1.41.59h-72.9a2 2 0 0 1-1.42-.59l-51.54-51.54a2 2 0 0 1-.59-1.42v-72.9a2 2 0 0 1 .59-1.42l51.55-51.54a2 2 0 0 1 1.41-.59h72.9a2 2 0 0 1 1.42.59l51.54 51.55a2 2 0 0 1 .59 1.41Z");
}
</style><path class="tb7jo8w8c"/>`,
		"fallback": "ph:octagon-light",
	});
}

export default Component;
