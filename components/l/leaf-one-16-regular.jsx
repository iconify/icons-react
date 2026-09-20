import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fgrp5tbru {
  fill: currentColor;
  d: path("M7.5 13.022V14.5a.5.5 0 0 0 1 0v-1.478a4.886 4.886 0 0 0 2.775-8.486l-2.437-2.2a1.25 1.25 0 0 0-1.676 0l-2.437 2.2A4.886 4.886 0 0 0 7.5 13.022m3.105-7.744A3.886 3.886 0 0 1 8.5 12.015V7.501a.5.5 0 0 0-1 0v4.514a3.886 3.886 0 0 1-2.105-6.737l2.437-2.2a.25.25 0 0 1 .336 0z");
}
</style><path class="fgrp5tbru"/>`,
		"fallback": "fluent:leaf-one-16-regular",
	});
}

export default Component;
