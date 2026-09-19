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
		"content": `<style>.bz4vhnf8b {
  fill: currentColor;
  d: path("M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zM6 20V4h7v4h5v12zm5-1h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4v-2h-2V9h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2z");
}

.unme33bjq {
  fill: currentColor;
  d: path("M6 20V4h7v4h5v12zm5-1h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4v-2h-2V9h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="unme33bjq"/><path class="bz4vhnf8b"/>`,
		"fallback": "ic:twotone-request-quote",
	});
}

export default Component;
