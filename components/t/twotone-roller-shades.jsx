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
		"content": `<style>.duxixbb1s {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h20v-2zm-2 0H6v-6h5v1.82A1.746 1.746 0 0 0 12 18a1.746 1.746 0 0 0 1-3.18V13h5zm0-8H6V5h12z");
}

.pgwpunbrh {
  fill: currentColor;
  d: path("M6 5h12v6H6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="pgwpunbrh"/><path class="duxixbb1s"/>`,
		"fallback": "ic:twotone-roller-shades",
	});
}

export default Component;
