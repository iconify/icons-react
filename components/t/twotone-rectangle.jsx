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
		"content": `<style>.ch4x5rb1h {
  fill: currentColor;
  d: path("M4 6h16v12H4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.g5wnm1b8d {
  fill: currentColor;
  d: path("M2 4v16h20V4zm18 14H4V6h16z");
}
</style><path class="ch4x5rb1h"/><path class="g5wnm1b8d"/>`,
		"fallback": "ic:twotone-rectangle",
	});
}

export default Component;
