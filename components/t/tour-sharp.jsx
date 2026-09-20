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
		"content": `<style>.wl1wsnbfk {
  fill: currentColor;
  d: path("M5 22V2h2v2h14l-2 5l2 5H7v8zm8.913-11.587Q14.5 9.825 14.5 9t-.587-1.412T12.5 7t-1.412.588T10.5 9t.588 1.413T12.5 11t1.413-.587");
}
</style><path class="wl1wsnbfk"/>`,
		"fallback": "material-symbols:tour-sharp",
	});
}

export default Component;
