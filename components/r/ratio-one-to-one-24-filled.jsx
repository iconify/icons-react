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
		"content": `<style>.el5mwot-n {
  fill: currentColor;
  d: path("M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h13.5A3.25 3.25 0 0 0 22 16.75v-9.5A3.25 3.25 0 0 0 18.75 4zM8.5 8.75v6.5a.75.75 0 0 1-1.5 0v-5.099l-.334.223a.75.75 0 1 1-.832-1.248l1.5-1A.75.75 0 0 1 8.5 8.75m9 0v6.5a.75.75 0 1 1-1.5 0v-5.099l-.334.223a.75.75 0 1 1-.832-1.248l1.5-1a.75.75 0 0 1 1.166.624M13 14a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-3a1 1 0 1 1 0-2a1 1 0 0 1 0 2");
}
</style><path class="el5mwot-n"/>`,
		"fallback": "fluent:ratio-one-to-one-24-filled",
	});
}

export default Component;
