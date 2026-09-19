import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.q676ax9eo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13 29.75c2.21 0 4-2.686 4-6h-4v-9.5h8.7v9.5c0 5.523-3.895 10-8.7 10Zm13.3 0c2.21 0 4-2.686 4-6h-4v-9.5H35v9.5c0 5.523-3.895 10-8.7 10Z");
}
</style><circle class="cpk0fnbgt"/><path class="q676ax9eo"/>`,
		"fallback": "arcticons:quoteunquote",
	});
}

export default Component;
