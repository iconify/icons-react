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
		"content": `<style>.qyuvxcc7p {
  fill: currentColor;
  d: path("M6 12a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6zm9.25 10.5a1.25 1.25 0 1 0 0 2.5h10.5a1.25 1.25 0 1 0 0-2.5zM14 31.75c0 .69.56 1.25 1.25 1.25h17.5a1.25 1.25 0 1 0 0-2.5h-17.5c-.69 0-1.25.56-1.25 1.25m1.25-17.25a1.25 1.25 0 1 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="qyuvxcc7p"/>`,
		"fallback": "fluent:textbox-48-filled",
	});
}

export default Component;
