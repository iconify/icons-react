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
		"content": `<style>.mthupbbfs {
  fill: currentColor;
  d: path("m12 19l-6-6l1.4-1.4l4.6 4.575l4.6-4.575L18 13zm0-6L6 7l1.4-1.4l4.6 4.575L16.6 5.6L18 7z");
}
</style><path class="mthupbbfs"/>`,
		"fallback": "material-symbols:stat-minus-2-sharp",
	});
}

export default Component;
