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
		"content": `<style>.lyh8ffb9n {
  fill: currentColor;
  d: path("M232 156h-4V72a28 28 0 0 0-28-28H56a28 28 0 0 0-28 28v84h-4a12 12 0 0 0-12 12v24a28 28 0 0 0 28 28h176a28 28 0 0 0 28-28v-24a12 12 0 0 0-12-12M52 72a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4v84H52Zm168 120a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-12h184Zm-64-96a12 12 0 0 1-12 12h-32a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12");
}
</style><path class="lyh8ffb9n"/>`,
		"fallback": "ph:laptop-bold",
	});
}

export default Component;
