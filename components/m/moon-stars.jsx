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
		"content": `<style>.vqa0dz98r {
  fill: currentColor;
  d: path("m15 8l-3-3l3-3l3 3zm5 3l-2-2l2-2l2 2zm-7.925 11q-2.1 0-3.937-.8t-3.2-2.162t-2.163-3.2t-.8-3.938q0-3.65 2.325-6.437T10.225 2q-.45 2.475.275 4.838t2.5 4.137t4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22");
}
</style><path class="vqa0dz98r"/>`,
		"fallback": "material-symbols:moon-stars",
	});
}

export default Component;
