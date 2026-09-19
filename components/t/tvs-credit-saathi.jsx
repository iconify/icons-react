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

.n_nk5lryh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.45 11.425v25.15c-.85-6.6-6.49-11.7-13.33-11.7H24c0-7.43-6.02-13.45-13.45-13.45z");
}
</style><circle class="cpk0fnbgt"/><path class="n_nk5lryh"/>`,
		"fallback": "arcticons:tvs-credit-saathi",
	});
}

export default Component;
