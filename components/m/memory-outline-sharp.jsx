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
		"content": `<style>.a8s3l35-t {
  fill: currentColor;
  d: path("M9 15V9h6v6zm2-2h2v-2h-2zm-2 8v-2H5v-4H3v-2h2v-2H3V9h2V5h4V3h2v2h2V3h2v2h4v4h2v2h-2v2h2v2h-2v4h-4v2h-2v-2h-2v2zm8-4V7H7v10zm-5-5");
}
</style><path class="a8s3l35-t"/>`,
		"fallback": "material-symbols:memory-outline-sharp",
	});
}

export default Component;
