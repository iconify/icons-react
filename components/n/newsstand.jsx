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
		"content": `<style>.d93vzwbyu {
  fill: currentColor;
  d: path("M2 20v-2h20v2zm2-4V8h2v8zm4 0V4h2v12zm4 0V4h2v12zm7 0l-4-7l1.75-1l4 7z");
}
</style><path class="d93vzwbyu"/>`,
		"fallback": "material-symbols:newsstand",
	});
}

export default Component;
