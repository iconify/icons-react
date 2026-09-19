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
		"content": `<style>.ler3fnomh {
  fill: currentColor;
  d: path("M7 8v14h10V8z");
}

.o89yxue8q {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M17 4h-3V2h-4v2H7v4h10z");
}
</style><path class="o89yxue8q"/><path class="ler3fnomh"/>`,
		"fallback": "ic:sharp-battery-90",
	});
}

export default Component;
