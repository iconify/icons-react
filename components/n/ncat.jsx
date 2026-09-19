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
		"content": `<style>.tc7a3sbig {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.04 43.5C7.373 27.3 35.24 17.767 36.307 14.167c1.066-3.6-2.38-9.667-9.134-9.667c-10.766 0-20.688 9.244-20.688 21.044C6.485 38.878 18.24 43.5 24.04 43.5c10.848 0 17.333-5 17.467-6.933s-1.267-4.867-3.333-4.4s-6.58 3.138-11.134 3.266c-5.57.158-6.482-3.018-7.217-6.474");
}
</style><path class="tc7a3sbig"/>`,
		"fallback": "arcticons:ncat",
	});
}

export default Component;
