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
		"content": `<style>.txylr2bvy {
  fill: currentColor;
  d: path("M37 4a9 9 0 0 1 9 9v1.75a1.25 1.25 0 1 1-2.5 0V13a6.5 6.5 0 1 0-13 0v5h2.25A6.25 6.25 0 0 1 39 24.25v13.5A6.25 6.25 0 0 1 32.75 44h-17.5A6.25 6.25 0 0 1 9 37.75v-13.5A6.25 6.25 0 0 1 15.25 18H28v-5a9 9 0 0 1 9-9M24 28.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5");
}
</style><path class="txylr2bvy"/>`,
		"fallback": "fluent:lock-open-48-filled",
	});
}

export default Component;
