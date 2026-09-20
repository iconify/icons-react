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
		"content": `<style>.zqdq_tbcp {
  fill: currentColor;
  d: path("m230.15 70.54l-44.69-44.68a20 20 0 0 0-28.28 0L33.86 149.17A19.86 19.86 0 0 0 28 163.31V208a20 20 0 0 0 20 20h168a12 12 0 0 0 0-24h-91L230.15 98.83a20 20 0 0 0 0-28.29M91 204H52v-39l84-84l39 39Zm101-101l-39-39l18.34-18.34l39 39Z");
}
</style><path class="zqdq_tbcp"/>`,
		"fallback": "ph:pencil-simple-line-bold",
	});
}

export default Component;
