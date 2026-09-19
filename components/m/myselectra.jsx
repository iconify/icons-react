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
		"content": `<style>.ypkhjd-dx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 38.5c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4h25.944L24.855 24.93c-.437.802-1.441.821-2.142-.088l-3.393-4.404c-1.302-1.689-6.383-1.785-9.892 2.169l7.969 12.168c1.43 2.183 3.527 3.788 6.774 3.93c2.541.11 5.139-.916 6.25-2.93L42.5 13.854z");
}
</style><path class="ypkhjd-dx"/>`,
		"fallback": "arcticons:myselectra",
	});
}

export default Component;
