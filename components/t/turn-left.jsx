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
		"content": `<style>.x1uszlbzw {
  fill: currentColor;
  d: path("M15 20v-9H6.8l1.6 1.6L7 14l-4-4l4-4l1.4 1.4L6.8 9H15q.825 0 1.413.588T17 11v9z");
}
</style><path class="x1uszlbzw"/>`,
		"fallback": "material-symbols:turn-left",
	});
}

export default Component;
