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

.i7dvbgu7q {
  fill: currentColor;
  d: path("M7.06 5L2.4 12l4.67 7H22V5zq.015 0 0 0M19 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5m-5 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5m-5 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5");
  opacity: var(--svg-opacity--0-3, 0.3);
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
</style><path class="i7dvbgu7q"/><path class="bxqdq2bci"/><circle class="x_n0gac8w"/><circle class="t_52sobrc"/><circle class="vhkwe8bgd"/>`,
		"fallback": "ic:twotone-more",
	});
}

export default Component;
