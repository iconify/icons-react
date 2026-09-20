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
		"content": `<style>.h43gg9u5b {
  fill: currentColor;
  d: path("M5.25 2A3.25 3.25 0 0 0 2 5.25v8a3.25 3.25 0 0 0 3.25 3.25H7.5v2.25A3.25 3.25 0 0 0 10.75 22h8A3.25 3.25 0 0 0 22 18.75v-8a3.25 3.25 0 0 0-3.25-3.25H16.5V5.25A3.25 3.25 0 0 0 13.25 2z");
}
</style><path class="h43gg9u5b"/>`,
		"fallback": "fluent:shape-union-24-filled",
	});
}

export default Component;
