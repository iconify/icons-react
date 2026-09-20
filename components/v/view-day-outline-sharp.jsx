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
		"content": `<style>.cwl_lt3ia {
  fill: currentColor;
  d: path("M3 20v-2h18v2zm0-4V8h18v8zm2-2h14v-4H5zM3 6V4h18v2zm2 8v-4z");
}
</style><path class="cwl_lt3ia"/>`,
		"fallback": "material-symbols:view-day-outline-sharp",
	});
}

export default Component;
