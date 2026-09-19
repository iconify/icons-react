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
		"content": `<style>.t-gb51bpp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.077 6.513A11.594 11.594 0 1 0 21.02 25.677m-7.097 15.81A11.594 11.594 0 1 0 26.98 22.323");
}
</style><path class="t-gb51bpp"/>`,
		"fallback": "arcticons:splid",
	});
}

export default Component;
