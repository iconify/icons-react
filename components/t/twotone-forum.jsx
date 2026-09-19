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
		"content": `<style>.d14512rpr {
  fill: currentColor;
  d: path("M15 11V4H4v8.17L5.17 11H6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.viux_sbct {
  fill: currentColor;
  d: path("M16 13c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4zm-12-.83V4h11v7H5.17zM22 7c0-.55-.45-1-1-1h-2v9H6v2c0 .55.45 1 1 1h11l4 4z");
}
</style><path class="d14512rpr"/><path class="viux_sbct"/>`,
		"fallback": "ic:twotone-forum",
	});
}

export default Component;
