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
		"content": `<style>.d-q_-0bar {
  fill: currentColor;
  d: path("M15 20V4h6v16zm-4 2v-2H3V4h8V2h2v20z");
}
</style><path class="d-q_-0bar"/>`,
		"fallback": "material-symbols:split-scene-left-sharp",
	});
}

export default Component;
