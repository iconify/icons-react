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
		"content": `<style>.tnrlf7btb {
  fill: currentColor;
  d: path("M2 21V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1M13 8a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0Zm-1 7a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="tnrlf7btb"/>`,
		"fallback": "coolicons:square-warning-fill-sharp",
	});
}

export default Component;
