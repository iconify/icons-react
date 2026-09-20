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
		"content": `<style>.h90kppb8j {
  fill: currentColor;
  d: path("M24.627 3.21a1.25 1.25 0 0 1 .337 1.736L9.112 28.447a1.25 1.25 0 1 1-2.073-1.398L22.891 3.548a1.25 1.25 0 0 1 1.736-.338M8.5 5.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M2.5 9a6 6 0 1 1 12 0a6 6 0 0 1-12 0M20 23a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m3.5-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12");
}
</style><path class="h90kppb8j"/>`,
		"fallback": "fluent:text-percent-32-filled",
	});
}

export default Component;
