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
		"content": `<style>.j96mtrbnx {
  fill: currentColor;
  d: path("M3 23v-3h18v3zm-1-5V6h20v12zm8-3l5-3l-5-3zM3 4V1h18v3z");
}
</style><path class="j96mtrbnx"/>`,
		"fallback": "material-symbols:video-template-sharp",
	});
}

export default Component;
