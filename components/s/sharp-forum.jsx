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
		"content": `<style>.kjakrkdqh {
  fill: currentColor;
  d: path("M22 6h-3v9H6v3h12l4 4zm-5 7V2H2v15l4-4z");
}
</style><path class="kjakrkdqh"/>`,
		"fallback": "ic:sharp-forum",
	});
}

export default Component;
