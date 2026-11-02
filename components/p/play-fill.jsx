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
		"content": `<style>.vdcntmbns {
  fill: currentColor;
  d: path("M19.543 9.428a2.998 2.998 0 0 1 0 5.144l-10 6A2.998 2.998 0 0 1 5 18V6a3 3 0 0 1 4.543-2.572Z");
}
</style><path class="vdcntmbns"/>`,
		"fallback": "coolicons:play-fill",
	});
}

export default Component;
