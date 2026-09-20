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
		"content": `<style>.lopfx-b4r {
  fill: currentColor;
  d: path("M12 20v-2h8v2zm-6.5-4l-1.4-1.4L8.675 10L4.1 5.4L5.5 4l6 6z");
}
</style><path class="lopfx-b4r"/>`,
		"fallback": "material-symbols:terminal-2-sharp",
	});
}

export default Component;
