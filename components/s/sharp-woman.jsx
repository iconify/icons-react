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
		"content": `<style>.yfz3w9lrl {
  cx: 12px;
  cy: 4px;
  r: 2px;
  fill: currentColor;
}

.zo10z7n7k {
  fill: currentColor;
  d: path("M13.41 7h-2.82L7 16h3v6h4v-6h3z");
}
</style><path class="zo10z7n7k"/><circle class="yfz3w9lrl"/>`,
		"fallback": "ic:sharp-woman",
	});
}

export default Component;
