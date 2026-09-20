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
		"content": `<style>.ibfk2gb2y {
  fill: currentColor;
  d: path("M8 19v-3h6v-2.5H9v-3h5V8H8V5h9v5.5L15.5 12l1.5 1.5V19z");
}
</style><path class="ibfk2gb2y"/>`,
		"fallback": "material-symbols:timer-3-outline-sharp",
	});
}

export default Component;
