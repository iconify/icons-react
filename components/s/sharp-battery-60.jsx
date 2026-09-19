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
		"content": `<style>.hsmy3kdku {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M17 4h-3V2h-4v2H7v7h10z");
}

.tbjwj-d5q {
  fill: currentColor;
  d: path("M7 11v11h10V11z");
}
</style><path class="hsmy3kdku"/><path class="tbjwj-d5q"/>`,
		"fallback": "ic:sharp-battery-60",
	});
}

export default Component;
