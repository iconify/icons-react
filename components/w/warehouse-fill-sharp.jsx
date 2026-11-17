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
		"content": `<style>.c7a38mbqt {
  fill: currentColor;
  d: path("M17 22V12a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v10H4a1 1 0 0 1-1-1V8c0-.379.214-.725.553-.894l6-3A1 1 0 0 1 10 4h4c.155 0 .308.036.447.106l6 3A1 1 0 0 1 21 8v13a1 1 0 0 1-1 1Zm-8-6v-3h6v3Zm0 6v-4h6v4Z");
}
</style><path class="c7a38mbqt"/>`,
		"fallback": "coolicons:warehouse-fill-sharp",
	});
}

export default Component;
