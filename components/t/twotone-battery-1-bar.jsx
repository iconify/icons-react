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
		"content": `<style>.hnp-2ibsk {
  fill: currentColor;
  d: path("M9 6h6v12H9z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.y7lx3c7ep {
  fill: currentColor;
  d: path("M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V2h4v2h2c.55 0 1 .45 1 1m-2 1H9v12h6z");
}
</style><path class="hnp-2ibsk"/><path class="y7lx3c7ep"/>`,
		"fallback": "ic:twotone-battery-1-bar",
	});
}

export default Component;
