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
		"content": `<style>.oeygmhbhi {
  fill: currentColor;
  d: path("M15 22v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5H3a1 1 0 0 1 0-2h1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v17h1a1 1 0 0 1 0 2ZM9 5a1 1 0 0 0-1 1v2.625c.001 2.409 1.475 4.097 3.594 5.039a1 1 0 0 0 .812 0c2.119-.942 3.593-2.63 3.594-5.039V6a1 1 0 0 0-1-1Zm4 17h-2v-4h2Z");
}
</style><path class="oeygmhbhi"/>`,
		"fallback": "coolicons:police-station-alt-fill-sharp",
	});
}

export default Component;
