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
		"content": `<style>.taqharx_d {
  fill: currentColor;
  d: path("M3 21V3h18v18zm10.725-5.55Q14.5 14.9 14.8 14H19V5H5v9h4.2q.3.9 1.075 1.45T12 16t1.725-.55M11 14V9.85l-1.6 1.6L8 10l4-4l4 4l-1.4 1.45l-1.6-1.6V14z");
}
</style><path class="taqharx_d"/>`,
		"fallback": "material-symbols:outbox-sharp",
	});
}

export default Component;
