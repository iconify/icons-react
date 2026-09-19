import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.gatl3rbcc {
  fill: var(--svg-color--fff, #fff);
  d: path("m49.4 28l1.6-6h-6.1l1.6-6h-6.1l-1.6 6h-8.1l1.6-6h-6.1l-1.6 6h-6.1l-1.6 6H23l-2.2 8h-6.1L13 42h6.1l-1.6 6h6.1l1.6-6h8.1l-1.6 6h6.1l1.6-6h6.1l1.6-6H41l2.2-8zM35 36h-8.1l2.2-8h8.1z");
}
</style><circle class="bgatx5byk"/><path class="gatl3rbcc"/>`,
		"fallback": "emojione:pound-symbol",
	});
}

export default Component;
