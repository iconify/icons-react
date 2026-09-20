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
		"content": `<style>.h8_hwncsa {
  fill: currentColor;
  d: path("M5 22V2h2v2h14l-2 5l2 5H7v8zM7 6v6zm6.913 4.413Q14.5 9.825 14.5 9t-.587-1.412T12.5 7t-1.412.588T10.5 9t.588 1.413T12.5 11t1.413-.587M7 12h11.05l-1.2-3l1.2-3H7z");
}
</style><path class="h8_hwncsa"/>`,
		"fallback": "material-symbols:tour-outline-sharp",
	});
}

export default Component;
