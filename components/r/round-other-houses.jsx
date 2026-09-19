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
		"content": `<style>.ph49bibeh {
  fill: currentColor;
  d: path("M1.61 12.19c.34.44.96.52 1.4.19l.99-.76V20c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-8.38l.99.76c.44.34 1.07.25 1.4-.19a.99.99 0 0 0-.19-1.4l-9.6-7.33c-.36-.27-.86-.27-1.21 0l-9.6 7.33c-.43.34-.52.97-.18 1.4M8 15c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m4 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m4 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1");
}
</style><path class="ph49bibeh"/>`,
		"fallback": "ic:round-other-houses",
	});
}

export default Component;
