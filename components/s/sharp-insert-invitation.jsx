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
		"content": `<style>.oq33o9bjz {
  fill: currentColor;
  d: path("M17 12h-5v5h5zM16 1v2H8V1H6v2H3.01v18H21V3h-3V1zm3 18H5V8h14z");
}
</style><path class="oq33o9bjz"/>`,
		"fallback": "ic:sharp-insert-invitation",
	});
}

export default Component;
