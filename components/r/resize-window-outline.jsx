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
		"content": `<style>.rf_dn-bbw {
  fill: currentColor;
  d: path("M19.292 20L4 4.714L4.713 4L20 19.287zm-9.62 0L4 14.329l.714-.714l5.67 5.671z");
}
</style><path class="rf_dn-bbw"/>`,
		"fallback": "material-symbols-light:resize-window-outline",
	});
}

export default Component;
