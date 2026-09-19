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
		"content": `<style>.gvim0vlza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.775 5.5h28.45m-7.107 0v11.382c-.24 8.264-9.96 9.96-17.079 0L33.961 42.5");
}
</style><path class="gvim0vlza"/>`,
		"fallback": "arcticons:sanskrit-basics",
	});
}

export default Component;
