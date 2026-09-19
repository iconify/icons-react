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
		"content": `<style>.fhl8kcbfh {
  fill: currentColor;
  d: path("m22 12l-4-4v3H3v2h15v3z");
}
</style><path class="fhl8kcbfh"/>`,
		"fallback": "ic:sharp-trending-flat",
	});
}

export default Component;
