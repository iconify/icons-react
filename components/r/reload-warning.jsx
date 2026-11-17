import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.crysd7zol {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 8A8.944 8.944 0 0 0 4 8m4 0H4V4m0 12a8.944 8.944 0 0 0 16 0m-4 0h4v4M12 8v5m0 3h.01");
}
</style><path class="crysd7zol"/>`,
		"fallback": "coolicons:reload-warning",
	});
}

export default Component;
