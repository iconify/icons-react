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
		"content": `<style>.rb0122cio {
  fill: currentColor;
  d: path("M8.385 17.616h7.23v-4.424h-7.23zm0-6.808h7.23V6.385h-7.23zM19 19.385q0 .69-.462 1.153T17.384 21H6.616q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h10.769q.69 0 1.153.463T19 4.616zm-1 0V4.615q0-.23-.192-.423T17.384 4H6.616q-.231 0-.424.192T6 4.615v14.77q0 .23.192.423t.423.192h10.77q.23 0 .423-.192t.192-.424M18 4H6z");
}
</style><path class="rb0122cio"/>`,
		"fallback": "material-symbols-light:splitscreen-portrait-outline",
	});
}

export default Component;
