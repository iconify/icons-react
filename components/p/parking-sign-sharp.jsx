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
		"content": `<style>.ublvmn24m {
  fill: currentColor;
  d: path("M15 11h1.5V9H20V5h-5zm1.5-3.5v-1h2v1zM11 14V2h12v12h-5v7h-2v-7zm-4 7v-2H2v-9h5.2L6.15 7H2V5h5.55L10 12v9zm-1.5-5q.625 0 1.063-.437T7 14.5t-.437-1.062T5.5 13t-1.062.438T4 14.5t.438 1.063T5.5 16");
}
</style><path class="ublvmn24m"/>`,
		"fallback": "material-symbols:parking-sign-sharp",
	});
}

export default Component;
