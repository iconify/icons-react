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
		"content": `<style>.ufd-spxhb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.07 3.017l15.075 8.692c1.204.694 2.086 2.218 2.086 3.607v17.368c0 1.389-.882 2.913-2.086 3.607l-15.074 8.692c-1.196.69-2.946.69-4.142 0L6.855 36.29c-1.204-.694-2.086-2.218-2.086-3.607V15.316c0-1.388.882-2.913 2.086-3.607l15.074-8.692c1.196-.69 2.946-.69 4.142 0");
}
</style><path class="ufd-spxhb"/>`,
		"fallback": "arcticons:simpleclub",
	});
}

export default Component;
