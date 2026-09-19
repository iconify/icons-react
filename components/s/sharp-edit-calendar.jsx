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
		"content": `<style>.si5-1024p {
  fill: currentColor;
  d: path("M12 22H3V4h3V2h2v2h8V2h2v2h3v8h-2v-2H5v10h7zm10.13-5.01l1.41-1.41l-2.12-2.12l-1.41 1.41zm-.71.71l-5.3 5.3H14v-2.12l5.3-5.3z");
}
</style><path class="si5-1024p"/>`,
		"fallback": "ic:sharp-edit-calendar",
	});
}

export default Component;
