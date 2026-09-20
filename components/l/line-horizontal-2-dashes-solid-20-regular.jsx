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
		"content": `<style>.vb533kbcj {
  fill: currentColor;
  d: path("M2.5 6a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm6 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm6 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-12 6a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z");
}
</style><path class="vb533kbcj"/>`,
		"fallback": "fluent:line-horizontal-2-dashes-solid-20-regular",
	});
}

export default Component;
