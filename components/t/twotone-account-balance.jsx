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
		"content": `<style>.bxcye_7gu {
  fill: currentColor;
  d: path("m6.29 6l5.21-2.74L16.71 6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.jnekwubgk {
  fill: currentColor;
  d: path("M6.5 10h-2v7h2zm6 0h-2v7h2zm8.5 9H2v2h19zm-2.5-9h-2v7h2zm-7-9L2 6v2h19V6zM6.29 6l5.21-2.74L16.71 6z");
}
</style><path class="bxcye_7gu"/><path class="jnekwubgk"/>`,
		"fallback": "ic:twotone-account-balance",
	});
}

export default Component;
