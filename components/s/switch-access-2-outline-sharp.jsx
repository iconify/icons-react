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
		"content": `<style>.iimoy0ris {
  fill: currentColor;
  d: path("M1 20V4h10v4H9V6H3v12h6v-2h2v4zm12 0v-4h2v2h2v2zm6 0v-2h2v-2h2v4zM13 8V4h4v2h-2v2zm8 0V6h-2V4h4v4zM3 18V6zm14-2l-1.4-1.4l1.575-1.6H6v-2h11.175L15.6 9.4L17 8l4 4z");
}
</style><path class="iimoy0ris"/>`,
		"fallback": "material-symbols:switch-access-2-outline-sharp",
	});
}

export default Component;
