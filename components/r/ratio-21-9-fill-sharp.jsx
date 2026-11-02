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
		"content": `<style>.au5yick1o {
  fill: currentColor;
  d: path("M2 16V8a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1");
}
</style><path class="au5yick1o"/>`,
		"fallback": "coolicons:ratio-21-9-fill-sharp",
	});
}

export default Component;
