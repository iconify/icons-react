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
		"content": `<style>.op91kob5n {
  fill: currentColor;
  d: path("M5 20v-9.144l-1.934 1.49l-.604-.792L12 4.25l9.539 7.304l-.605.787L19 10.856V20zm1-1h12v-8.9l-6-4.575L6 10.1zm0 0h12zm2-4.23q-.31 0-.54-.23T7.23 14t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m4 0q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m4 0q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23");
}
</style><path class="op91kob5n"/>`,
		"fallback": "material-symbols-light:other-houses-outline",
	});
}

export default Component;
