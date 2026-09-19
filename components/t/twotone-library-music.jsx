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
		"content": `<style>.fasrc0znu {
  fill: currentColor;
  d: path("M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H8V4h12zm-7.5-1a2.5 2.5 0 0 0 2.5-2.5V7h3V5h-4v5.51c-.42-.32-.93-.51-1.5-.51a2.5 2.5 0 0 0 0 5M2 6v14c0 1.1.9 2 2 2h14v-2H4V6z");
}

.ylw_6bm0u {
  fill: currentColor;
  d: path("M8 16h12V4H8zm4.5-6c.57 0 1.08.19 1.5.51V5h4v2h-3v5.5a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 2.5-2.5");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="ylw_6bm0u"/><path class="fasrc0znu"/>`,
		"fallback": "ic:twotone-library-music",
	});
}

export default Component;
