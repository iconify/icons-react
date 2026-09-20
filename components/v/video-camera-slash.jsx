import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zzlc0si1o {
  fill: currentColor;
  d: path("M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16h-78.94a8 8 0 0 0 0 16H192v87.63a8 8 0 0 0 16 0V159l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7M240 161.05l-32-21.33v-23.44L240 95ZM53.92 34.62a8 8 0 1 0-11.84 10.76L51.73 56H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h150.64l19.44 21.38a8 8 0 1 0 11.84-10.76ZM32 184V72h34.28L168.1 184Z");
}
</style><path class="zzlc0si1o"/>`,
		"fallback": "ph:video-camera-slash",
	});
}

export default Component;
