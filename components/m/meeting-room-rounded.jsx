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
		"content": `<style>.ca__btb6i {
  fill: currentColor;
  d: path("M5 20q-.213 0-.356-.144t-.144-.357t.144-.356T5 19h1.5V4.808q0-.343.232-.576T7.308 4h6.154q.343 0 .575.232t.232.576V5h2.423q.344 0 .576.232t.232.576V19H19q.212 0 .356.144t.144.357t-.144.356T19 20h-1.683q-.357 0-.587-.232t-.23-.576V6h-2.23v13.192q0 .344-.233.576t-.575.232zm7.04-8.54q-.23-.23-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23t.23-.54t-.23-.54");
}
</style><path class="ca__btb6i"/>`,
		"fallback": "material-symbols-light:meeting-room-rounded",
	});
}

export default Component;
