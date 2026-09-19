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
		"content": `<style>.hef8_-37v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.002 36.853c1.51 1.51 8.061 8.137 14.112 4.643c3.895-2.249 2.878-8.336-1.758-12.973");
}

.zljq6usgl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.482 21.989c0 13.998 6.66 21.222 23.219 12.784c13.758-7.012 13.449-20.811-.02-26.93C16.213 1.723 6.482 7.99 6.482 21.99z");
}
</style><path class="zljq6usgl"/><path class="hef8_-37v"/>`,
		"fallback": "arcticons:simeji",
	});
}

export default Component;
