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
		"content": `<style>.am7wwubvr {
  fill: currentColor;
  d: path("M7 12V6h11.05l-1.2 3l1.2 3z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.kb2oldbvp {
  fill: currentColor;
  d: path("M21 4H7V2H5v20h2v-8h14l-2-5zM7 12V6h11.05l-1.2 3l1.2 3zm7-3c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2");
}
</style><path class="am7wwubvr"/><path class="kb2oldbvp"/>`,
		"fallback": "ic:twotone-tour",
	});
}

export default Component;
