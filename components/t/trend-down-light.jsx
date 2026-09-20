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
		"content": `<style>.hrhi482vp {
  fill: currentColor;
  d: path("M238 128v64a6 6 0 0 1-6 6h-64a6 6 0 0 1 0-12h49.52L136 104.49l-35.76 35.75a6 6 0 0 1-8.48 0l-72-72a6 6 0 0 1 8.48-8.48L96 127.51l35.76-35.75a6 6 0 0 1 8.48 0L226 177.52V128a6 6 0 0 1 12 0");
}
</style><path class="hrhi482vp"/>`,
		"fallback": "ph:trend-down-light",
	});
}

export default Component;
