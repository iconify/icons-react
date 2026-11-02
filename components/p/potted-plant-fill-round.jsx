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
		"content": `<style>.xfpztpwdx {
  fill: currentColor;
  d: path("M12.57 6.58A6.98 6.98 0 0 1 18 4h3a1 1 0 0 1 1 1v1a7 7 0 0 1-7 7h-2v2h4a1 1 0 0 1 1 1v1a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5v-1a1 1 0 0 1 1-1h4v-3H9a7 7 0 0 1-7-7V3a1 1 0 0 1 1-1h3a7.01 7.01 0 0 1 6.57 4.58");
}
</style><path class="xfpztpwdx"/>`,
		"fallback": "coolicons:potted-plant-fill-round",
	});
}

export default Component;
