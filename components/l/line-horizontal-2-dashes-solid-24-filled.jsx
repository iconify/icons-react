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
		"content": `<style>.eo9m4eehz {
  fill: currentColor;
  d: path("M3 7a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2zm7.5 0a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2zM18 7a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM3 15a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z");
}
</style><path class="eo9m4eehz"/>`,
		"fallback": "fluent:line-horizontal-2-dashes-solid-24-filled",
	});
}

export default Component;
