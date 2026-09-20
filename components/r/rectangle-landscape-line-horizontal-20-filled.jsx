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
		"content": `<style>.ckdc98bjz {
  fill: currentColor;
  d: path("M16 4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z");
}
</style><path class="ckdc98bjz"/>`,
		"fallback": "fluent:rectangle-landscape-line-horizontal-20-filled",
	});
}

export default Component;
