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
		"content": `<style>.g8le8ebeu {
  fill: currentColor;
  d: path("m3.106 7.553l2-4A1 1 0 0 1 6 3h12c.379 0 .725.214.894.553l2 4A1 1 0 0 1 20 9H5v10h3a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1V8c0-.155.036-.308.106-.447M13 15h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2");
}
</style><path class="g8le8ebeu"/>`,
		"fallback": "coolicons:package-minus-corner-fill-sharp",
	});
}

export default Component;
