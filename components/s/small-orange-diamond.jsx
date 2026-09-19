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
		"content": `<style>.q_06f8bjf {
  fill: var(--svg-color--f6921e, #f6921e);
  d: path("M32.725 56.013L8.407 32.077l24.32-23.941l24.315 23.941z");
}
</style><path class="q_06f8bjf"/>`,
		"fallback": "emojione-v1:small-orange-diamond",
	});
}

export default Component;
