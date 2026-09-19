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
		"content": `<style>.f9josw8pf {
  fill: currentColor;
  d: path("M20 21V3h-2v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2zM8 17H6v-2h2zm0-4H6v-2h2zm0-4H6V7h2zm6 10h-4V5h4zm2-12h2v2h-2zm0 4h2v2h-2zm0 6v-2h2v2z");
}

.sj5kogb_z {
  fill: currentColor;
  d: path("M10 5h4v14h-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="sj5kogb_z"/><path class="f9josw8pf"/>`,
		"fallback": "ic:twotone-local-movies",
	});
}

export default Component;
