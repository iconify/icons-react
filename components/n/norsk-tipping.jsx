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
		"content": `<style>.hvzpk2bat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.783 6.396L23.47 24.242L5.5 42.5m24.082-23.582L42.5 5.5M28.836 29.894l13.499 12.319");
}
</style><path class="hvzpk2bat"/>`,
		"fallback": "arcticons:norsk-tipping",
	});
}

export default Component;
