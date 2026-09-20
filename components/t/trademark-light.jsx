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
		"content": `<style>.u8pbx01-b {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m-18-114a6 6 0 0 1-6 6H94v42a6 6 0 0 1-12 0v-42H72a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m80 0v48a6 6 0 0 1-12 0v-32l-17.48 20a6 6 0 0 1-9 0L134 120v32a6 6 0 0 1-12 0v-48a6 6 0 0 1 10.52-4L156 126.89l23.48-26.84A6 6 0 0 1 190 104");
}
</style><path class="u8pbx01-b"/>`,
		"fallback": "ph:trademark-light",
	});
}

export default Component;
