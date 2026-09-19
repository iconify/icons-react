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
		"content": `<style>.oazllrbet {
  fill: currentColor;
  d: path("m4 18l2-2h14V4H4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.z2l0rtbum {
  fill: currentColor;
  d: path("M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z");
}
</style><path class="oazllrbet"/><path class="z2l0rtbum"/>`,
		"fallback": "ic:twotone-chat-bubble",
	});
}

export default Component;
