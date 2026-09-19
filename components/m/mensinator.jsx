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
		"content": `<style>.obxduubug {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5C14.242 13.834 8.68 19.71 8.676 28.168v.008C8.676 36.64 15.536 43.5 24 43.5q.793 0 1.566-.08c7.727-.784 13.758-7.31 13.758-15.244v-.01C39.319 19.708 33.758 13.834 24 4.5M17.785 24h12.43m-12.43 10.145h12.43M24 30.215v-12.43");
}
</style><path class="obxduubug"/>`,
		"fallback": "arcticons:mensinator",
	});
}

export default Component;
