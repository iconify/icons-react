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
		"content": `<style>.q6jxdobki {
  fill: currentColor;
  d: path("M6 23.25c0-.69.56-1.25 1.25-1.25h33.5a1.25 1.25 0 1 1 0 2.5H7.25c-.69 0-1.25-.56-1.25-1.25");
}
</style><path class="q6jxdobki"/>`,
		"fallback": "fluent:minimize-48-regular",
	});
}

export default Component;
