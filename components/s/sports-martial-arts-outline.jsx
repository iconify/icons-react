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
		"content": `<style>.d6aqftpsh {
  fill: currentColor;
  d: path("m10 22l-.5-9l-3.175-1.825l-.35 1.3L8 16l-1.725 1L3.8 12.75L5 8.45l5.75-3.3L8 2.4L9.4 1L14 5.575L10.4 7.65l1.2 1.05L19.8 2L21 3.4L12.5 12L12 22zM5 7q-.825 0-1.412-.587T3 5t.588-1.412T5 3t1.413.588T7 5t-.587 1.413T5 7");
}
</style><path class="d6aqftpsh"/>`,
		"fallback": "material-symbols:sports-martial-arts-outline",
	});
}

export default Component;
