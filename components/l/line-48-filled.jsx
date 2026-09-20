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
		"content": `<style>.j9lo0vple {
  fill: currentColor;
  d: path("M43.56 4.44a1.5 1.5 0 0 1 0 2.12l-37 37a1.5 1.5 0 0 1-2.12-2.12l37-37a1.5 1.5 0 0 1 2.12 0");
}
</style><path class="j9lo0vple"/>`,
		"fallback": "fluent:line-48-filled",
	});
}

export default Component;
