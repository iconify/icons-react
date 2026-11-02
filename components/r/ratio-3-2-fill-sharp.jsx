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
		"content": `<style>.hiw_-_bqh {
  fill: currentColor;
  d: path("M2 18V6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1");
}
</style><path class="hiw_-_bqh"/>`,
		"fallback": "coolicons:ratio-3-2-fill-sharp",
	});
}

export default Component;
