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
		"content": `<style>.bwy5xt_pj {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-9.85 93.12l-40 48A8 8 0 0 1 160 184h-.43a8 8 0 0 1-6.23-3.55l-58-87.09l-33.19 39.76a8 8 0 0 1-12.3-10.24l40-48a8 8 0 0 1 12.81.68l58.05 87.09l33.14-39.77a8 8 0 1 1 12.3 10.24");
}
</style><path class="bwy5xt_pj"/>`,
		"fallback": "ph:wave-triangle-fill",
	});
}

export default Component;
