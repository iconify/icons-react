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
		"content": `<style>.wesm5obkd {
  fill: currentColor;
  d: path("M35.968 6.256a1.5 1.5 0 0 1 .404 2.083l-22.258 33a1.5 1.5 0 0 1-2.487-1.678l22.258-33a1.5 1.5 0 0 1 2.083-.405M13.5 9a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M5 14.5a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0m24 19a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m5.5-8.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17");
}
</style><path class="wesm5obkd"/>`,
		"fallback": "fluent:text-percent-48-filled",
	});
}

export default Component;
