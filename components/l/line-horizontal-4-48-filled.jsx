import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xzyapnbjx {
  fill: currentColor;
  d: path("M42.5 38a1.5 1.5 0 0 1 0 3h-37a1.5 1.5 0 0 1 0-3zm0-10a1.5 1.5 0 0 1 0 3h-37a1.5 1.5 0 0 1 0-3zm0-10a1.5 1.5 0 0 1 0 3h-37a1.5 1.5 0 0 1 0-3zm0-10a1.5 1.5 0 0 1 0 3h-37a1.5 1.5 0 0 1 0-3z");
}
</style><path class="xzyapnbjx"/>`,
		"fallback": "fluent:line-horizontal-4-48-filled",
	});
}

export default Component;
