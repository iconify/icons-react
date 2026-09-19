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
		"content": `<style>.rls2mumyh {
  fill: currentColor;
  d: path("M5 5h14v14H5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.xugrx5b8f {
  fill: currentColor;
  d: path("M3 3v18h18V3zm16 16H5V5h14z");
}
</style><path class="rls2mumyh"/><path class="xugrx5b8f"/>`,
		"fallback": "ic:twotone-square",
	});
}

export default Component;
