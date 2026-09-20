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
		"content": `<style>.qlxxuhbof {
  fill: currentColor;
  d: path("M9 16.77h6q.31 0 .54-.221q.23-.22.23-.549q0-.31-.23-.54t-.54-.23H9q-.31 0-.54.221q-.23.22-.23.549q0 .31.23.54t.54.23M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM4 9.5h16V6.616q0-.231-.192-.424T19.385 6H4.615q-.23 0-.423.192T4 6.616zm.616 8.5h14.769q.23 0 .423-.192t.192-.424V10.5H4v6.885q0 .23.192.423t.423.192M4 18v-7.5zm2.54-4.46q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m3 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m3 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m3 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m3 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23");
}
</style><path class="qlxxuhbof"/>`,
		"fallback": "material-symbols-light:keyboard-onscreen-outline-rounded",
	});
}

export default Component;
