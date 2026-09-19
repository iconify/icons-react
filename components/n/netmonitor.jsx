import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mc0l67b8l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.7 7.33v33.34h7.8V7.33Zm-15.6 9v24.34h7.8V16.32Zm7.8 2.89v21.45h7.8V19.21Zm-23.4 6v15.45h7.8V25.23Zm7.8 3.26v12.19h7.8V28.49Z");
}
</style><path class="mc0l67b8l"/>`,
		"fallback": "arcticons:netmonitor",
	});
}

export default Component;
