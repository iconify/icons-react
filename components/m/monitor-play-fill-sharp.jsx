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
		"content": `<style>.w84mifbup {
  fill: currentColor;
  d: path("M3 17V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1m12.573-7.319l-5-3.5A1 1 0 0 0 9 7v7a.999.999 0 0 0 1.573.819l5-3.5a1 1 0 0 0 0-1.638M9 19h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><path class="w84mifbup"/>`,
		"fallback": "coolicons:monitor-play-fill-sharp",
	});
}

export default Component;
