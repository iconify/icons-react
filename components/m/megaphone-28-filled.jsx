import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sasxoqkrc {
  fill: currentColor;
  d: path("M26 7.353a2.75 2.75 0 0 0-3.458-2.657L4.045 9.629a2.75 2.75 0 0 0-2.041 2.657v3.427a2.75 2.75 0 0 0 2.041 2.657L7 19.158v.342a4.5 4.5 0 0 0 8.56 1.942l6.982 1.862A2.75 2.75 0 0 0 26 20.647zM8.5 19.56l5.572 1.486A3 3 0 0 1 8.5 19.559");
}
</style><path class="sasxoqkrc"/>`,
		"fallback": "fluent:megaphone-28-filled",
	});
}

export default Component;
