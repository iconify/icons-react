import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v8wyugsxs {
  fill: currentColor;
  d: path("M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M36 200V56a4 4 0 0 1 4-4h44v152H40a4 4 0 0 1-4-4m184 0a4 4 0 0 1-4 4H92V52h124a4 4 0 0 1 4 4Z");
}
</style><path class="v8wyugsxs"/>`,
		"fallback": "ph:sidebar-simple-thin",
	});
}

export default Component;
