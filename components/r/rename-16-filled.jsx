import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pxjs2bahx {
  fill: currentColor;
  d: path("M6.5 2a.5.5 0 0 0 0 1h1v10h-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-1V3h1a.5.5 0 0 0 0-1zM4 4h2.5v8H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 8H9.5V4H12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2");
}
</style><path class="pxjs2bahx"/>`,
		"fallback": "fluent:rename-16-filled",
	});
}

export default Component;
