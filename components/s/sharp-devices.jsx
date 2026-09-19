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
		"content": `<style>.dvjv9g5ss {
  fill: currentColor;
  d: path("M4 6h18V4H2v13H0v3h14v-3H4zm20 2h-8v12h8zm-2 9h-4v-7h4z");
}
</style><path class="dvjv9g5ss"/>`,
		"fallback": "ic:sharp-devices",
	});
}

export default Component;
