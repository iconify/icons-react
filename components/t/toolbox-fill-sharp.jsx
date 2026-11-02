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
		"content": `<style>.urvy2gxot {
  fill: currentColor;
  d: path("M16 7h5a1 1 0 0 1 1 1v5h-5v2h5v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5h5v-2H2V8a1 1 0 0 1 1-1h5V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm-2 0V5h-4v2Zm-5 6v2h6v-2Z");
}
</style><path class="urvy2gxot"/>`,
		"fallback": "coolicons:toolbox-fill-sharp",
	});
}

export default Component;
