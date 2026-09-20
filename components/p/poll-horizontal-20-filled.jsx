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
		"content": `<style>.tgfctcl1w {
  fill: currentColor;
  d: path("M18 10a2 2 0 0 0-2-2H4a2 2 0 1 0 0 4h12a2 2 0 0 0 2-2m-8-6a2 2 0 0 0-2-2H4a2 2 0 1 0 0 4h4a2 2 0 0 0 2-2m4 12a2 2 0 0 0-2-2H4a2 2 0 1 0 0 4h8a2 2 0 0 0 2-2");
}
</style><path class="tgfctcl1w"/>`,
		"fallback": "fluent:poll-horizontal-20-filled",
	});
}

export default Component;
