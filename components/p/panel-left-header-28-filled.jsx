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
		"content": `<style>.hp8gr1bxe {
  fill: currentColor;
  d: path("M5.754 4a3.75 3.75 0 0 0-3.75 3.75v11.5A3.75 3.75 0 0 0 5.754 23H22.25A3.75 3.75 0 0 0 26 19.25V7.75A3.75 3.75 0 0 0 22.25 4zM24.5 19.25a2.25 2.25 0 0 1-2.25 2.25H10.5v-10h14zm0-9.25h-14V5.5h11.75a2.25 2.25 0 0 1 2.25 2.25z");
}
</style><path class="hp8gr1bxe"/>`,
		"fallback": "fluent:panel-left-header-28-filled",
	});
}

export default Component;
