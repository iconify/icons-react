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
		"content": `<style>.b3vj_9jjv {
  fill: currentColor;
  d: path("M195.8 60.2a28 28 0 0 0-39.51-.09l-11.61 12.17a12 12 0 1 1-17.36-16.56L139 43.43l.2-.2a52 52 0 0 1 73.54 73.54l-.2.2l-12.29 11.71a12 12 0 0 1-16.56-17.36l12.17-11.61a28 28 0 0 0-.06-39.51m-84.48 123.52l-11.61 12.17a28 28 0 0 1-39.6-39.6l12.17-11.61a12 12 0 0 0-16.56-17.36L43.43 139l-.2.2a52 52 0 0 0 73.54 73.54l.2-.2l11.71-12.29a12 12 0 1 0-17.36-16.56ZM216 148h-24a12 12 0 0 0 0 24h24a12 12 0 0 0 0-24M40 108h24a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m120 72a12 12 0 0 0-12 12v24a12 12 0 0 0 24 0v-24a12 12 0 0 0-12-12M96 76a12 12 0 0 0 12-12V40a12 12 0 0 0-24 0v24a12 12 0 0 0 12 12");
}
</style><path class="b3vj_9jjv"/>`,
		"fallback": "ph:link-break-bold",
	});
}

export default Component;
