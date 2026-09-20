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
		"content": `<style>.sdcncpbys {
  fill: currentColor;
  d: path("M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3zM5 7.5A2.5 2.5 0 0 1 7.5 5h17A2.5 2.5 0 0 1 27 7.5V16h-7a1 1 0 0 0-1 1v1a3 3 0 1 1-6 0v-1a1 1 0 0 0-1-1H5zM5 18h6a5 5 0 0 0 10 0h6v6.5a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 5 24.5z");
}
</style><path class="sdcncpbys"/>`,
		"fallback": "fluent:mail-inbox-32-regular",
	});
}

export default Component;
