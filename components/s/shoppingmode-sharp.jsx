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
		"content": `<style>.b04ls_bim {
  fill: currentColor;
  d: path("M11.975 22.825L2 12.85L12.8 2h10v10zM18.3 8q.625 0 1.063-.437T19.8 6.5t-.437-1.062T18.3 5t-1.062.438T16.8 6.5t.438 1.063T18.3 8");
}
</style><path class="b04ls_bim"/>`,
		"fallback": "material-symbols:shoppingmode-sharp",
	});
}

export default Component;
