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
		"content": `<style>.kqx16ebsu {
  fill: currentColor;
  d: path("M12 2L1 21h22zm0 3.99L19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z");
}

.tajt5acui {
  fill: currentColor;
  d: path("M12 5.99L4.47 19h15.06zM13 18h-2v-2h2zm-2-4v-4h2v4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="tajt5acui"/><path class="kqx16ebsu"/>`,
		"fallback": "ic:twotone-report-problem",
	});
}

export default Component;
