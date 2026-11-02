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
		"content": `<style>.xbvwu5euc {
  fill: currentColor;
  d: path("m3.707 2.293l6 6a.999.999 0 1 1-1.414 1.414l-6-6a.999.999 0 1 1 1.414-1.414M22 9a1 1 0 0 1-2 0V5.414L3.707 21.707a.999.999 0 1 1-1.414-1.414L18.586 4H15a1 1 0 0 1 0-2h6a.997.997 0 0 1 1 1Zm-7 11h3.586l-4.293-4.293a.999.999 0 1 1 1.414-1.414L20 18.586V15a1 1 0 0 1 2 0v6a.997.997 0 0 1-1 1h-6a1 1 0 0 1 0-2");
}
</style><path class="xbvwu5euc"/>`,
		"fallback": "coolicons:shuffle-fill-round",
	});
}

export default Component;
