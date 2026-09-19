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
		"content": `<style>.qyxdx9bvb {
  fill: currentColor;
  d: path("m16 6.83l1 1V10h-2V7.83l.41-.41zm-4 0l.59.59l.41.41V10h-2V7.83l.41-.41zM11 14v-2h2v2zm2 2v2h-2v-2zM7 7.83l1-1l.59.59l.41.41V10H7zM7 12h2v2H7zm0 4h2v2H7zm10 2h-2v-2h2zm0-4h-2v-2h2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.y6lcu3bsj {
  fill: currentColor;
  d: path("M21 12v-2h-2V7l-3-3l-2 2l-2-2l-2 2l-2-2l-3 3v3H3v2h2v2H3v2h2v4h14v-4h2v-2h-2v-2zm-5-5.17l1 1V10h-2V7.83l.41-.41zm-4 0l.59.59l.41.41V10h-2V7.83l.41-.41zM11 14v-2h2v2zm2 2v2h-2v-2zM7 7.83l1-1l.59.59l.41.41V10H7zM7 12h2v2H7zm0 4h2v2H7zm10 2h-2v-2h2zm0-4h-2v-2h2z");
}
</style><path class="qyxdx9bvb"/><path class="y6lcu3bsj"/>`,
		"fallback": "ic:twotone-fence",
	});
}

export default Component;
