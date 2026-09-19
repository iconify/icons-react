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
		"content": `<style>.eqf_25b-a {
  fill: currentColor;
  d: path("M12.16 3h-.32L9.21 8.25h5.58zm4.3 5.25h5.16L19 3h-5.16zm4.92 1.5h-8.63V20.1zM11.25 20.1V9.75H2.62zM7.54 8.25L10.16 3H5L2.38 8.25z");
}
</style><path class="eqf_25b-a"/>`,
		"fallback": "ic:sharp-diamond",
	});
}

export default Component;
