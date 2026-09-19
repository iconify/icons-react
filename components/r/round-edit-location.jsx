import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.njqx-xk4e {
  fill: currentColor;
  d: path("M12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.45 6.92 7.34 11.23c.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2M9.73 13.5H8.5v-1.44l3.93-3.92l1.43 1.43l-3.77 3.78q-.15.15-.36.15m5.55-5.34l-.7.7l-1.44-1.44l.7-.7a.38.38 0 0 1 .54 0l.9.9c.15.15.15.39 0 .54");
}
</style><path class="njqx-xk4e"/>`,
		"fallback": "ic:round-edit-location",
	});
}

export default Component;
