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
		"content": `<style>.ef82j2b_w {
  fill: currentColor;
  d: path("m9.2 16l2.8-2.1l2.75 2.1l-1.05-3.4l2.8-2.2h-3.4L12 7l-1.1 3.4H7.5l2.75 2.2zM2 20v-6q.825 0 1.413-.587T4 12t-.587-1.412T2 10V4h20v6q-.825 0-1.412.588T20 12t.588 1.413T22 14v6z");
}
</style><path class="ef82j2b_w"/>`,
		"fallback": "material-symbols:local-activity-sharp",
	});
}

export default Component;
