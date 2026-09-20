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
		"content": `<style>.b3ydiqi0s {
  fill: currentColor;
  d: path("M5.98 19H18V4H5.98zm2.712 2v-1H4.981V3H19v17h-3.73v1zM12 11.5");
}
</style><path class="b3ydiqi0s"/>`,
		"fallback": "material-symbols-light:speaker-3-outline-sharp",
	});
}

export default Component;
