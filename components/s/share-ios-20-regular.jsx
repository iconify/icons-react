import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hhew5_bgr {
  fill: currentColor;
  d: path("M10.354 2.146a.5.5 0 0 0-.708 0l-4.5 4.5a.5.5 0 1 0 .708.708L9.5 3.707V12.5a.5.5 0 0 0 1 0V3.707l3.646 3.647a.5.5 0 0 0 .708-.708zM4 9.5a.5.5 0 0 0-1 0V14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9.5a.5.5 0 0 0-1 0V14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z");
}
</style><path class="hhew5_bgr"/>`,
		"fallback": "fluent:share-ios-20-regular",
	});
}

export default Component;
