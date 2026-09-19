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
		"content": `<style>.pb5om0b0m {
  fill: currentColor;
  d: path("M23 6h-9.59l3.29-3.29L16 2l-4 4l-4-4l-.71.71L10.59 6H1v16h22zm-2 14H3V8h18zM9 10v8l7-4z");
}
</style><path class="pb5om0b0m"/>`,
		"fallback": "ic:sharp-live-tv",
	});
}

export default Component;
