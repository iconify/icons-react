import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d_r8oxwkq {
  fill: currentColor;
  d: path("M14.25 2a.75.75 0 0 1 .75.75v22.5a.75.75 0 0 1-1.5 0V2.75a.75.75 0 0 1 .75-.75M12 5H4a.75.75 0 0 0 0 1.5h8zm0 4H4a.75.75 0 0 0 0 1.5h8zm0 4H4a.75.75 0 0 0 0 1.5h8zm0 4H4a.75.75 0 0 0 0 1.5h8zm0 4H4a.75.75 0 0 0 0 1.5h8zm10.5 0h-6v-5h6a2.5 2.5 0 0 1 0 5m0-9h-6V7h6a2.5 2.5 0 0 1 0 5");
}
</style><path class="d_r8oxwkq"/>`,
		"fallback": "fluent:text-density-28-filled",
	});
}

export default Component;
