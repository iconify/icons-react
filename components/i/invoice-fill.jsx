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
		"content": `<style>.uv6m1obre {
  fill: currentColor;
  d: path("M28 128a8 8 0 0 1 0-16h28a8 8 0 0 0 0-16H40a24 24 0 0 1 0-48a8 8 0 0 1 16 0h8a8 8 0 0 1 0 16H40a8 8 0 0 0 0 16h16a24 24 0 0 1 0 48a8 8 0 0 1-16 0Zm196-80H96a8 8 0 0 0 0 16h120v32H104a8 8 0 0 0 0 16h56v32H80a8 8 0 0 0 0 16h80v32H40v-40a8 8 0 0 0-16 0v40a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8");
}
</style><path class="uv6m1obre"/>`,
		"fallback": "ph:invoice-fill",
	});
}

export default Component;
