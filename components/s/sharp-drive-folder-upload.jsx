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
		"content": `<style>.g75u_vbyt {
  fill: currentColor;
  d: path("M22 6H12l-2-2H2v16h20zm-9 7v4h-2v-4H8l4.01-4L16 13z");
}
</style><path class="g75u_vbyt"/>`,
		"fallback": "ic:sharp-drive-folder-upload",
	});
}

export default Component;
