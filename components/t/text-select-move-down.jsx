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
		"content": `<style>.uw-unsbig {
  fill: currentColor;
  d: path("M3 5V3h18v2zm9 12l-4-4l1.4-1.4l1.6 1.575V7h2v6.175l1.6-1.575L16 13zm-9 4v-2h18v2z");
}
</style><path class="uw-unsbig"/>`,
		"fallback": "material-symbols:text-select-move-down",
	});
}

export default Component;
