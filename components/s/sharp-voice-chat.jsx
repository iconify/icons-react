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
		"content": `<style>.n5bd6u2jk {
  fill: currentColor;
  d: path("M22 2H2.01L2 22l4-4h16zm-4 12l-4-3.2V14H6V6h8v3.2L18 6z");
}
</style><path class="n5bd6u2jk"/>`,
		"fallback": "ic:sharp-voice-chat",
	});
}

export default Component;
