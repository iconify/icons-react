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
		"content": `<style>.yv1t7levl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.785 8.4v25.45c0 5.426 6.295 9.65 11.046 9.65c5.47 0 8.416-.813 11.384-3.022l-5.298-5.428c-2.085 1.163-4.62 2.236-7.342-.65V18.8h8.158v-7.15h-8.158V4.5z");
}
</style><path class="yv1t7levl"/>`,
		"fallback": "arcticons:turff",
	});
}

export default Component;
