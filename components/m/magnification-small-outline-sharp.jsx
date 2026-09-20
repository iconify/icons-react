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
		"content": `<style>.wkjb066wf {
  fill: currentColor;
  d: path("M5.5 10.5h3v-3h-3zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="wkjb066wf"/>`,
		"fallback": "material-symbols-light:magnification-small-outline-sharp",
	});
}

export default Component;
