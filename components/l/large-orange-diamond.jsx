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
		"content": `<style>.lriubg22d {
  fill: var(--svg-color--f6921e, #f6921e);
  d: path("M63 32L32 62.998L1 32L32 1");
}
</style><path class="lriubg22d"/>`,
		"fallback": "emojione-v1:large-orange-diamond",
	});
}

export default Component;
