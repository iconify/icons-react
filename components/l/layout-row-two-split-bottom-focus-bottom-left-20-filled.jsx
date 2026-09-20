import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.de8_gefhc {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3.5H4zm6 4.5h6V14a2 2 0 0 1-2 2h-4z");
}
</style><path class="de8_gefhc"/>`,
		"fallback": "fluent:layout-row-two-split-bottom-focus-bottom-left-20-filled",
	});
}

export default Component;
