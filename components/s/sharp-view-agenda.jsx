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
		"content": `<style>.mn-vzhbwb {
  fill: currentColor;
  d: path("M3 13h18v8H3zM3 3h18v8H3z");
}
</style><path class="mn-vzhbwb"/>`,
		"fallback": "ic:sharp-view-agenda",
	});
}

export default Component;
