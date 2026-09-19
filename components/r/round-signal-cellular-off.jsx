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
		"content": `<style>.xhfkwtbla {
  fill: currentColor;
  d: path("M21 3.41c0-.89-1.08-1.34-1.71-.71l-6.6 6.6L21 17.61zm.44 17.47L5.62 5.06a.996.996 0 1 0-1.41 1.41l5.66 5.66l-7.16 7.16c-.63.63-.19 1.71.7 1.71h15.32l1.29 1.29c.39.39 1.02.39 1.41 0c.4-.39.4-1.02.01-1.41");
}
</style><path class="xhfkwtbla"/>`,
		"fallback": "ic:round-signal-cellular-off",
	});
}

export default Component;
