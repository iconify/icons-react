import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pqlafw-3f {
  fill: currentColor;
  d: path("M9 5.5A3.5 3.5 0 0 1 12.5 2h7A3.5 3.5 0 0 1 23 5.5v21a3.5 3.5 0 0 1-3.5 3.5h-7q-.363 0-.705-.071A3.5 3.5 0 0 1 9 26.5zm2 .5v2h3a1 1 0 1 0 0-2zm0 4.5v2h5a1 1 0 1 0 0-2zm0 4.5v2h3a1 1 0 1 0 0-2zm0 4.5v2h5a1 1 0 1 0 0-2zm0 4.5v2h3a1 1 0 1 0 0-2z");
}
</style><path class="pqlafw-3f"/>`,
		"fallback": "fluent:ruler-32-filled",
	});
}

export default Component;
