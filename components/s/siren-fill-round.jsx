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
		"content": `<style>.utpq3jyxx {
  fill: currentColor;
  d: path("M11 5V3a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0M6.707 6.293a.999.999 0 1 1-1.414 1.414l-2-2a.999.999 0 1 1 1.414-1.414Zm12 1.414a1 1 0 0 1-1.414-1.414l2-2a.999.999 0 1 1 1.414 1.414ZM17 22H7a3 3 0 1 1 0-6v-3a5 5 0 0 1 10 0v3a3 3 0 1 1 0 6m-4-7v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0");
}
</style><path class="utpq3jyxx"/>`,
		"fallback": "coolicons:siren-fill-round",
	});
}

export default Component;
