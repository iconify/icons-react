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
		"content": `<style>.bfhn30bfc {
  fill: currentColor;
  d: path("M28 11a1 1 0 0 1 1 1v12.5a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5V12a1 1 0 0 1 1-1zm0-8a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z");
}
</style><path class="bfhn30bfc"/>`,
		"fallback": "fluent:layout-add-above-32-filled",
	});
}

export default Component;
