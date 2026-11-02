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
		"content": `<style>.pvlgjsbrh {
  fill: currentColor;
  d: path("m2.707 1.293l20 20a.999.999 0 1 1-1.414 1.414l-1.941-1.941A4 4 0 0 1 18 21H6a4 4 0 0 1 0-8h5.586l-2-2H6a4 4 0 0 1-3.028-6.614L1.293 2.707a.999.999 0 1 1 1.414-1.414M15.243 11l-8-8H18a4 4 0 0 1 0 8Zm6.697 6.697L17.243 13H18a4 4 0 0 1 3.94 4.697M7.01 16H7a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="pvlgjsbrh"/>`,
		"fallback": "coolicons:server-off-fill-round",
	});
}

export default Component;
