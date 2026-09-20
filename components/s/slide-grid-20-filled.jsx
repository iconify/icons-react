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
		"content": `<style>.x7cnvjv3g {
  fill: currentColor;
  d: path("M4 7a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm1 3.5a1 1 0 0 0-1 1V13a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1zM10.5 7a1 1 0 0 1 1-1H15a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1zm1 3.5a1 1 0 0 0-1 1V13a1 1 0 0 0 1 1H15a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1zM2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z");
}
</style><path class="x7cnvjv3g"/>`,
		"fallback": "fluent:slide-grid-20-filled",
	});
}

export default Component;
