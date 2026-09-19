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
		"content": `<style>.bxqdq2bci {
  fill: currentColor;
  d: path("M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H7.07L2.4 12l4.66-7H22z");
}

.t_52sobrc {
  cx: 14px;
  cy: 12px;
  r: 1.5px;
  fill: currentColor;
}

.vhkwe8bgd {
  cx: 19px;
  cy: 12px;
  r: 1.5px;
  fill: currentColor;
}

.x_n0gac8w {
  cx: 9px;
  cy: 12px;
  r: 1.5px;
  fill: currentColor;
}
</style><path class="bxqdq2bci"/><circle class="x_n0gac8w"/><circle class="t_52sobrc"/><circle class="vhkwe8bgd"/>`,
		"fallback": "ic:outline-more",
	});
}

export default Component;
