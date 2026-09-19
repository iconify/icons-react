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
		"content": `<style>.lx745ynqo {
  fill: currentColor;
  d: path("M13 12v4l4 1l-4 1v4l10-5z");
}

.qyjc2tn7p {
  fill: currentColor;
  d: path("M20 4h-6a2.5 2.5 0 0 0-5 0H3.01v5.8C5.7 9.8 6 11.96 6 12.5s-.29 2.7-3 2.7V21h5.8c0-2.16 1.37-2.78 2.2-2.94v-9.3l9 4.5z");
}
</style><path class="qyjc2tn7p"/><path class="lx745ynqo"/>`,
		"fallback": "ic:sharp-send-time-extension",
	});
}

export default Component;
