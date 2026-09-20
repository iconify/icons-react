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
		"content": `<style>.q-q7_4b3k {
  fill: var(--svg-color--fff, #fff);
  d: path("M9 25V9h16z");
}

.qle35vxgz {
  fill: var(--svg-color--fff, #fff);
  d: path("m10.028 15.686l5.657-5.657L29 23.343L23.342 29z");
}

.x-kz1kb7j {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}
</style><path class="x-kz1kb7j"/><path class="q-q7_4b3k"/><path class="qle35vxgz"/>`,
		"fallback": "twemoji:up-left-arrow",
	});
}

export default Component;
