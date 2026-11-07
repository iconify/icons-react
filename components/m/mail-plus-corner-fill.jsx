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
		"content": `<style>.wqwm6kw5a {
  fill: currentColor;
  d: path("M3.707 4.292A3 3 0 0 1 5 4h14c.448 0 .889.099 1.293.292L14.586 10H9.414ZM21 12h-5.586l6.294-6.293c.193.404.292.845.292 1.293v4a1 1 0 0 1-1 1M2 17V7c0-.448.099-.889.292-1.293l5.415 5.414A3 3 0 0 0 9.828 12H12v7a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3m17-2v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0");
}
</style><path class="wqwm6kw5a"/>`,
		"fallback": "coolicons:mail-plus-corner-fill",
	});
}

export default Component;
