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
		"content": `<style>.gu6nyabhk {
  fill: currentColor;
  d: path("M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M5 18H4V6h1zm12 0H7V6h10zm3 0h-1V6h1z");
}

.h3cpuwblb {
  fill: currentColor;
  d: path("M7 6h10v12H7z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="h3cpuwblb"/><path class="gu6nyabhk"/>`,
		"fallback": "ic:twotone-width-full",
	});
}

export default Component;
