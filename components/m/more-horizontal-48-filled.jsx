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
		"content": `<style>.ie8olfbyc {
  fill: currentColor;
  d: path("M16 24a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m11.5 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m8 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7");
}
</style><path class="ie8olfbyc"/>`,
		"fallback": "fluent:more-horizontal-48-filled",
	});
}

export default Component;
