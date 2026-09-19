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
		"content": `<style>.ej-tmznxx {
  fill: currentColor;
  d: path("M7 19h10V5H7zm2-8h2v2H9z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.t6z7jnqnv {
  fill: currentColor;
  d: path("M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2zm-2 0H7V5h10z");
}

.w_ir-7hca {
  fill: currentColor;
  d: path("M9 11h2v2H9z");
}
</style><path class="ej-tmznxx"/><path class="t6z7jnqnv"/><path class="w_ir-7hca"/>`,
		"fallback": "ic:twotone-door-back",
	});
}

export default Component;
