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
		"content": `<style>.ruc7hnxun {
  fill: currentColor;
  d: path("M3 17V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1m12 2a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Z");
}
</style><path class="ruc7hnxun"/>`,
		"fallback": "coolicons:monitor-fill-sharp",
	});
}

export default Component;
