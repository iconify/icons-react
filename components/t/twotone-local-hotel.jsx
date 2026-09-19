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
		"content": `<style>.cz5xupvlx {
  fill: currentColor;
  d: path("M4 11c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3m4 0c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1m11-4h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2z");
}

.o38kd7i_w {
  fill: currentColor;
  d: path("M19 9h-6v6h8v-4c0-1.1-.9-2-2-2");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.s-wdh8s9v {
  cx: 7px;
  cy: 11px;
  r: 1px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><circle class="s-wdh8s9v"/><path class="o38kd7i_w"/><path class="cz5xupvlx"/>`,
		"fallback": "ic:twotone-local-hotel",
	});
}

export default Component;
