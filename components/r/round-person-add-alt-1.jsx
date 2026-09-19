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
		"content": `<style>.myqgmabes {
  cx: 9px;
  cy: 8px;
  r: 4px;
  fill: currentColor;
}

.virs7ab-w {
  fill: currentColor;
  d: path("M9 14c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4m11-4V7h-2v3h-3v2h3v3h2v-3h3v-2z");
}
</style><circle class="myqgmabes"/><path class="virs7ab-w"/>`,
		"fallback": "ic:round-person-add-alt-1",
	});
}

export default Component;
