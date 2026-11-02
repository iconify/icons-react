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
		"content": `<style>.ifxuvobxe {
  fill: currentColor;
  d: path("M15 2a1 1 0 0 1 0 2h-2v2h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8V4H9a1 1 0 0 1 0-2ZM4 8v3h3V8Zm5 0v3h3V8Zm5 3h6V8h-6Zm7 9a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><path class="ifxuvobxe"/>`,
		"fallback": "coolicons:tram-side-fill-sharp",
	});
}

export default Component;
