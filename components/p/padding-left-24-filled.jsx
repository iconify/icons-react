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
		"content": `<style>.xov8gdcjg {
  fill: currentColor;
  d: path("M3 4a1 1 0 0 0-1 1v1.75a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1m0 5.25a1 1 0 0 0-1 1v3.5a1 1 0 1 0 2 0v-3.5a1 1 0 0 0-1-1m0 7a1 1 0 0 0-1 1V19a1 1 0 1 0 2 0v-1.75a1 1 0 0 0-1-1M21 4a1 1 0 0 0-1 1v14a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1M5.293 12.707a1 1 0 0 1 0-1.414l5-5a1 1 0 1 1 1.414 1.414L8.414 11H18a1 1 0 1 1 0 2H8.414l3.293 3.293a1 1 0 0 1-1.414 1.414z");
}
</style><path class="xov8gdcjg"/>`,
		"fallback": "fluent:padding-left-24-filled",
	});
}

export default Component;
