import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b5q31bc8v {
  fill: var(--svg-color--66757f, #66757f);
  d: path("M35 6c-.559 0-2.05.934-3.26 1.76C31.413 6.934 30.674 6 29 6H18s-5 0-5 5v2s0 3 3 3h13s2.075-.006 2.771-1.739C32.976 15.082 34.446 16 35 16c1 0 1-1 1-1V7s0-1-1-1M9 35v-9s0-3 2.75-3H22s3 0 3 3v9h-2v-9s0-1-1-1H12s-1 0-1 1v9z");
}

.unt7wntxg {
  fill: var(--svg-color--31373d, #31373d);
  d: path("M29 18H16c-3.668 0-5-2.99-5-5v-2H7c-3 0-3 3-3 3s-2-1-3-1s-1 1-1 1v10s0 1 1 1s3-1 3-1v7c0 4 4 4 4 4h18c4 0 4-4 4-4V17.894A5 5 0 0 1 29 18");
}
</style><path class="unt7wntxg"/><path class="b5q31bc8v"/>`,
		"fallback": "twemoji:video-camera",
	});
}

export default Component;
