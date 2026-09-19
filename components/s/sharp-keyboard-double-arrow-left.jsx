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
		"content": `<style>.ks5tz3pyn {
  fill: currentColor;
  d: path("M17.59 18L19 16.59L14.42 12L19 7.41L17.59 6l-6 6z");
}

.tlp7y7bro {
  fill: currentColor;
  d: path("m11 18l1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z");
}
</style><path class="ks5tz3pyn"/><path class="tlp7y7bro"/>`,
		"fallback": "ic:sharp-keyboard-double-arrow-left",
	});
}

export default Component;
