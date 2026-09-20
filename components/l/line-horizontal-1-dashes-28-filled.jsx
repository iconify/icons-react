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
		"content": `<style>.kaktcxb1f {
  fill: currentColor;
  d: path("M2 14a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m9 0a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m9 0a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1");
}
</style><path class="kaktcxb1f"/>`,
		"fallback": "fluent:line-horizontal-1-dashes-28-filled",
	});
}

export default Component;
