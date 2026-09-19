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
		"content": `<style>.jh9x8wbpo {
  fill: currentColor;
  d: path("M21 11h-3V8h2V6h-2.35a5.99 5.99 0 0 0-11.3 0H4v2h2v3H3v6h3v3H4v2h16v-2h-2v-3h3zm-9 6.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5");
}

.xzditrbqy {
  cx: 12px;
  cy: 14px;
  r: 1.5px;
  fill: currentColor;
}
</style><path class="jh9x8wbpo"/><circle class="xzditrbqy"/>`,
		"fallback": "ic:sharp-fire-hydrant-alt",
	});
}

export default Component;
