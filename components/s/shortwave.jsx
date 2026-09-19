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
		"content": `<style>.vivo2yiiy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 18.652c18.6 32.575 26.213-1.869 39 10.94c-21.055-33.378-24.021 2.356-39-10.94");
}
</style><path class="vivo2yiiy"/>`,
		"fallback": "arcticons:shortwave",
	});
}

export default Component;
