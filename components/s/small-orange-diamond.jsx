import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yvs5yqzlt {
  fill: currentColor;
  d: path("m16 32l15.999-16l16 16l-16 16z");
}
</style><path class="yvs5yqzlt"/>`,
		"fallback": "emojione-monotone:small-orange-diamond",
	});
}

export default Component;
