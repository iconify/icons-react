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
		"content": `<style>.ln-fcwbuf {
  fill: currentColor;
  d: path("M2 18V2h20v20l-4-4zm2-2h14.85L20 17.125V4H4zm0 0V4z");
}
</style><path class="ln-fcwbuf"/>`,
		"fallback": "material-symbols:mode-comment-outline-sharp",
	});
}

export default Component;
