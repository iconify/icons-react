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
		"content": `<style>.ifey8ccjb {
  fill: currentColor;
  d: path("M6.75 3h-1A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21H6v-6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 15v6h.25A2.75 2.75 0 0 0 21 18.25V8.286a3.25 3.25 0 0 0-.952-2.299l-2.035-2.035A3.25 3.25 0 0 0 15.75 3v4.5a2.25 2.25 0 0 1-2.25 2.25H9A2.25 2.25 0 0 1 6.75 7.5zm7.5 0v4.5a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75V3zm2.25 18v-6a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v6z");
}
</style><path class="ifey8ccjb"/>`,
		"fallback": "fluent:save-24-filled",
	});
}

export default Component;
