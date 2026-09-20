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
		"content": `<style>.a_hrtttrr {
  fill: currentColor;
  d: path("M19.749 4a2.25 2.25 0 0 1 2.25 2.25v11.502a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 17.752V6.25A2.25 2.25 0 0 1 4.25 4zM13.75 15.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 1 0 0-1.5");
}
</style><path class="a_hrtttrr"/>`,
		"fallback": "fluent:tablet-24-filled",
	});
}

export default Component;
