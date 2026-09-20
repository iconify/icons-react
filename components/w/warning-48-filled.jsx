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
		"content": `<style>.c802zyoed {
  fill: currentColor;
  d: path("M18.544 7.202c2.385-4.27 8.529-4.27 10.913 0l14.243 25.5C46.026 36.868 43.014 42 38.243 42H9.758c-4.771 0-7.782-5.132-5.456-9.298zM24 30a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0-15c-.69 0-1.25.56-1.25 1.25v9.5a1.25 1.25 0 0 0 2.5 0v-9.5c0-.69-.56-1.25-1.25-1.25");
}
</style><path class="c802zyoed"/>`,
		"fallback": "fluent:warning-48-filled",
	});
}

export default Component;
