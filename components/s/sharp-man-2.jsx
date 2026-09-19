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
		"content": `<style>.qxtuw636r {
  fill: currentColor;
  d: path("M16 7H8v8h2.5v7h3v-7H16z");
}

.yfz3w9lrl {
  cx: 12px;
  cy: 4px;
  r: 2px;
  fill: currentColor;
}
</style><path class="qxtuw636r"/><circle class="yfz3w9lrl"/>`,
		"fallback": "ic:sharp-man-2",
	});
}

export default Component;
