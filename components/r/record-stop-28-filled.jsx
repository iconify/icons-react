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
		"content": `<style>.ohfeg4beu {
  fill: currentColor;
  d: path("M14 26c6.627 0 12-5.373 12-12S20.627 2 14 2S2 7.373 2 14s5.373 12 12 12M10.5 9h7a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 9 17.5v-7A1.5 1.5 0 0 1 10.5 9");
}
</style><path class="ohfeg4beu"/>`,
		"fallback": "fluent:record-stop-28-filled",
	});
}

export default Component;
