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
		"content": `<style>.y9pxo8bdj {
  fill: currentColor;
  d: path("M5 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-3 7c0-1.113.903-2 2.009-2h6.248A5.48 5.48 0 0 0 9 14.5c0 1.303.453 2.5 1.21 3.443Q9.617 18 9 18c-1.855 0-3.583-.386-4.865-1.203C2.833 15.967 2 14.69 2 13m17 1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5");
}
</style><path class="y9pxo8bdj"/>`,
		"fallback": "fluent:person-clock-20-filled",
	});
}

export default Component;
