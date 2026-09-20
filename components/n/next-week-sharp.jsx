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
		"content": `<style>.db_npacvr {
  fill: currentColor;
  d: path("M2 21V6h6V2h8v4h6v15zm8-15h4V4h-4zm1 11.5l4-4l-4-4l-1.4 1.4l2.6 2.6l-2.6 2.6z");
}
</style><path class="db_npacvr"/>`,
		"fallback": "material-symbols:next-week-sharp",
	});
}

export default Component;
