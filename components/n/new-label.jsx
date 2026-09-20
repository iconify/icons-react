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
		"content": `<style>.c5qzl6bft {
  fill: currentColor;
  d: path("M11.7 19q.285-.598.427-1.222q.142-.623.142-1.278q0-2.452-1.716-4.168t-4.169-1.717q-.913 0-1.775.275T3 11.699V6.615q0-.666.475-1.14T4.615 5h10.212q.384 0 .727.167t.565.46L21 12l-4.88 6.373q-.223.294-.566.46t-.727.167zm-5.815 1v-3h-3v-1h3v-3h1v3h3v1h-3v3z");
}
</style><path class="c5qzl6bft"/>`,
		"fallback": "material-symbols-light:new-label",
	});
}

export default Component;
