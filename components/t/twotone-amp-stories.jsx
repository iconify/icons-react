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
		"content": `<style>.hrc_nmb9r {
  fill: currentColor;
  d: path("M7 19h10V4H7zM9 6h6v11H9zM3 6h2v11H3zm16 0h2v11h-2z");
}

.svq6l8dcn {
  fill: currentColor;
  d: path("M9 6h6v11H9z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="svq6l8dcn"/><path class="hrc_nmb9r"/>`,
		"fallback": "ic:twotone-amp-stories",
	});
}

export default Component;
