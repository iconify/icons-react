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
		"content": `<style>.azc34kwut {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.026 29.986l6.395 7.028h-4.04c-.644 0-1.245-.477-1.677-.954L11.765 22.872l4.103-.002c.652 0 1.241.52 1.704 1.033l2.756 3.06L42.5 8.092L14.585 38.877c-.589.65-1.544 1.031-2.421 1.031H5.5L17.525 29.56");
}
</style><path class="azc34kwut"/>`,
		"fallback": "arcticons:true-x",
	});
}

export default Component;
