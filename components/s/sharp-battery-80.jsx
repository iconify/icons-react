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
		"content": `<style>.y3fc0ljog {
  fill: currentColor;
  d: path("M7 9v13h10V9z");
}

.yogr3rmvf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M17 4h-3V2h-4v2H7v5h10z");
}
</style><path class="yogr3rmvf"/><path class="y3fc0ljog"/>`,
		"fallback": "ic:sharp-battery-80",
	});
}

export default Component;
