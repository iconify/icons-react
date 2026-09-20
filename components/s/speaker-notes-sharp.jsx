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
		"content": `<style>.hahluwbuo {
  fill: currentColor;
  d: path("M7.693 13.309q.23-.23.23-.54t-.23-.54t-.54-.229t-.538.23t-.23.54t.23.539t.539.23t.54-.23m0-2.77q.229-.23.229-.539t-.23-.54t-.54-.23t-.538.23t-.23.54t.23.54t.539.23t.54-.23m0-2.77q.229-.23.229-.54q0-.309-.23-.539t-.54-.23t-.538.23q-.23.23-.23.54t.23.54q.23.229.539.229t.54-.23m2.537 5.5H14.5v-1h-4.27zm0-2.77H17.5v-1h-7.27zm0-2.77H17.5v-1h-7.27zM3 20.078V3h18v14H6.077z");
}
</style><path class="hahluwbuo"/>`,
		"fallback": "material-symbols-light:speaker-notes-sharp",
	});
}

export default Component;
