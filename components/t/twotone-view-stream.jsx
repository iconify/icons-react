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
		"content": `<style>.hf527bb2u {
  fill: currentColor;
  d: path("M19 17H5v-4h14zM5 11V7h14v4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.z1vyudaod {
  fill: currentColor;
  d: path("M3 7v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2m16 10H5v-4h14zM5 11V7h14v4z");
}
</style><path class="hf527bb2u"/><path class="z1vyudaod"/>`,
		"fallback": "ic:twotone-view-stream",
	});
}

export default Component;
