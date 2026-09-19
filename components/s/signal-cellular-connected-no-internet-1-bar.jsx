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
		"content": `<style>.prp8dgy0l {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M22 8V2L2 22h16V8z");
}

.q62uqvtfz {
  fill: currentColor;
  d: path("M20 10v8h2v-8zm-8 12V12L2 22zm8 0h2v-2h-2z");
}
</style><path class="prp8dgy0l"/><path class="q62uqvtfz"/>`,
		"fallback": "ic:signal-cellular-connected-no-internet-1-bar",
	});
}

export default Component;
