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
		"content": `<style>.ri6nydjao {
  fill: currentColor;
  d: path("M2 7a3 3 0 1 1 6 0a3 3 0 0 1-6 0m19-1h-5a2 2 0 0 0-2 2v3h5a1 1 0 0 1 0 2h-5v6a1 1 0 0 1-2 0V8a4 4 0 0 1 4-4h5a1 1 0 0 1 0 2M4 7a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="ri6nydjao"/>`,
		"fallback": "coolicons:temperature-fahrenheit-fill",
	});
}

export default Component;
