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
		"content": `<style>.fv67rvojq {
  fill: currentColor;
  d: path("M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H8V4h12zm-7.53-2L9 10.5l1.4-1.41l2.07 2.08L17.6 6L19 7.41zM4 20h14v2H4c-1.1 0-2-.9-2-2V6h2z");
}

.h7lsudbqx {
  fill: currentColor;
  d: path("M8 16h12V4H8zm2.4-6.91l2.07 2.08L17.6 6L19 7.41L12.47 14L9 10.5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="h7lsudbqx"/><path class="fv67rvojq"/>`,
		"fallback": "ic:twotone-library-add-check",
	});
}

export default Component;
