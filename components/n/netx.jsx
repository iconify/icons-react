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
		"content": `<style>.mkzi0fbet {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38.977 10.298l-19.43 15.259L6.762 10.405A19.4 19.4 0 0 1 13.469 5.5l11.62 15.258M9.023 37.702l19.43-15.258l12.785 15.151A19.4 19.4 0 0 1 34.53 42.5L22.91 27.242");
}
</style><path class="mkzi0fbet"/>`,
		"fallback": "arcticons:netx",
	});
}

export default Component;
