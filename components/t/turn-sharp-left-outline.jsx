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
		"content": `<style>.q9otaacuk {
  fill: currentColor;
  d: path("M16 21v-6H8q-.825 0-1.412-.587T6 13V6.8L4.4 8.4L3 7l4-4l4 4l-1.4 1.4L8 6.8V13h8q.825 0 1.413.588T18 15v6z");
}
</style><path class="q9otaacuk"/>`,
		"fallback": "material-symbols:turn-sharp-left-outline",
	});
}

export default Component;
