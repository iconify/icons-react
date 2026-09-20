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
		"content": `<style>.r4lhlbb0c {
  fill: currentColor;
  d: path("M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12s12-5.373 12-12S20.627 2 14 2m0 19.5c-3.314 0-6-2.143-6-5.357C8 14.959 8.96 14 10.143 14h7.714c1.184 0 2.143.96 2.143 2.143c0 3.214-2.686 5.357-6 5.357m0-9A3.25 3.25 0 1 1 14 6a3.25 3.25 0 0 1 0 6.5");
}
</style><path class="r4lhlbb0c"/>`,
		"fallback": "fluent:person-circle-28-filled",
	});
}

export default Component;
