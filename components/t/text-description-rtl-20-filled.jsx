import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.faukaobnt {
  fill: currentColor;
  d: path("M17.25 4.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5zm0 3a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5zm.75 3.75a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 .75-.75m-.75 2.25a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5z");
}
</style><path class="faukaobnt"/>`,
		"fallback": "fluent:text-description-rtl-20-filled",
	});
}

export default Component;
