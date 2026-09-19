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
		"content": `<style>.io1p7oban {
  fill: currentColor;
  d: path("M2 2v20l4-4h16V2zm17 11l-2.5-1.5L14 13V5h5z");
}
</style><path class="io1p7oban"/>`,
		"fallback": "ic:sharp-comment-bank",
	});
}

export default Component;
