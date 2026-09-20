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
		"content": `<style>.th_gy4bcx {
  fill: currentColor;
  d: path("m11.577 16.23l2.539-5.076h-1.693V7.769l-2.538 5.077h1.692zM6 22V2h12.077v4.83H19v3.686h-.923V22zm1-1h10.077V3H7zm0 0V3z");
}
</style><path class="th_gy4bcx"/>`,
		"fallback": "material-symbols-light:mobile-charge-outline-sharp",
	});
}

export default Component;
