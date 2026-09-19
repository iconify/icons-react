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
		"content": `<style>.nm7lbubhr {
  fill: currentColor;
  d: path("M8 5h8v10H8z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.pahn6ybed {
  fill: currentColor;
  d: path("M8 21h8v2H8zm8-19.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M16 15H8V5h8z");
}
</style><path class="nm7lbubhr"/><path class="pahn6ybed"/>`,
		"fallback": "ic:twotone-dock",
	});
}

export default Component;
