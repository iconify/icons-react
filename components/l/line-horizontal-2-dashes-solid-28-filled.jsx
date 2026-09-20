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
		"content": `<style>.rkf-s6b5a {
  fill: currentColor;
  d: path("M3 9a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zm9 0a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm9 0a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM3 17a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2z");
}
</style><path class="rkf-s6b5a"/>`,
		"fallback": "fluent:line-horizontal-2-dashes-solid-28-filled",
	});
}

export default Component;
