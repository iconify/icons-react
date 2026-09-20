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
		"content": `<style>.t3czdgbwn {
  fill: currentColor;
  d: path("M19.775 22.625L18.15 21H3V5.85L1.375 4.225L2.8 2.8l18.4 18.4zM16.15 19l-4.875-4.875L9.7 15.7l-1.4-1.4l1.575-1.575L5 7.85V19zM7.85 5l-2-2H12v2zm6.275 6.275l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4zM21 18.15l-2-2V12h2z");
}
</style><path class="t3czdgbwn"/>`,
		"fallback": "material-symbols:open-in-new-off-sharp",
	});
}

export default Component;
