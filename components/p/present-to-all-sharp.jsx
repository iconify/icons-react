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
		"content": `<style>.jxsn4pb8w {
  fill: currentColor;
  d: path("M11 16h2v-4.15l1.6 1.575L16.025 12L12 8l-4 4l1.425 1.4L11 11.825zm-9 4V4h20v16z");
}
</style><path class="jxsn4pb8w"/>`,
		"fallback": "material-symbols:present-to-all-sharp",
	});
}

export default Component;
