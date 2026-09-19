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
		"content": `<style>.zexliob2o {
  fill: currentColor;
  d: path("M20 2H4c-1.1 0-2 .9-2 2v15.59c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-1.76 9.55L16.5 10.5l-1.74 1.05c-.33.2-.76-.04-.76-.43V4h5v7.12a.5.5 0 0 1-.76.43");
}
</style><path class="zexliob2o"/>`,
		"fallback": "ic:round-comment-bank",
	});
}

export default Component;
