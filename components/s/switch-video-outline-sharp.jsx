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
		"content": `<style>.wdmg7fywl {
  fill: currentColor;
  d: path("m7.5 15.5l1.4-1.4L7.8 13h4.4l-1.1 1.1l1.4 1.4L16 12l-3.5-3.5l-1.4 1.4l1.1 1.1H7.8l1.1-1.1l-1.4-1.4L4 12zM2 20V4h16v6.5l4-4v11l-4-4V20zm2-2h12V6H4zm0 0V6z");
}
</style><path class="wdmg7fywl"/>`,
		"fallback": "material-symbols:switch-video-outline-sharp",
	});
}

export default Component;
