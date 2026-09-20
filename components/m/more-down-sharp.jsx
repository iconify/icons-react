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
		"content": `<style>.j9w6w3bqk {
  fill: currentColor;
  d: path("M5.5 18.5V9h1v8.5H15v1zm5-5V4h1v8.5H20v1z");
}
</style><path class="j9w6w3bqk"/>`,
		"fallback": "material-symbols-light:more-down-sharp",
	});
}

export default Component;
