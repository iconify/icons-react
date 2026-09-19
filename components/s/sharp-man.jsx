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
		"content": `<style>.igre99bqd {
  fill: currentColor;
  d: path("M16 7H8v8h2v7h4v-7h2z");
}

.yfz3w9lrl {
  cx: 12px;
  cy: 4px;
  r: 2px;
  fill: currentColor;
}
</style><path class="igre99bqd"/><circle class="yfz3w9lrl"/>`,
		"fallback": "ic:sharp-man",
	});
}

export default Component;
