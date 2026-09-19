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
		"content": `<style>.c-edbi9ii {
  fill: currentColor;
  d: path("M22 2H2v20h20zm-2 18H4V4h16zM18 6h-7v4.28c-.6.35-1 .98-1 1.72c0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V8h3v8H8V8h2V6H6v12h12z");
}
</style><path class="c-edbi9ii"/>`,
		"fallback": "ic:sharp-nfc",
	});
}

export default Component;
