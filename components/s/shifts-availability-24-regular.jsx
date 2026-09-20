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
		"content": `<style>.yh1z_5bur {
  fill: currentColor;
  d: path("M8.5 3.5a5 5 0 0 0-.229 9.995a7.5 7.5 0 0 0-.253 1.487a6.5 6.5 0 1 1 6.964-6.964a7.5 7.5 0 0 0-1.487.253A5 5 0 0 0 8.5 3.5m5.778 9.734a.75.75 0 1 0-1.056 1.066l1.215 1.203l-1.217 1.217a.75.75 0 1 0 1.06 1.06l1.22-1.219l1.215 1.219a.75.75 0 0 0 1.062-1.06l-1.215-1.217l1.212-1.204a.75.75 0 0 0-1.057-1.064L15.5 14.444zM15.5 9a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13m-5 6.5a5 5 0 1 1 10 0a5 5 0 0 1-10 0m.78-8.78a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0l-1.5-1.502a.75.75 0 0 1 1.061-1.06l.97.971l2.469-2.47a.75.75 0 0 1 1.06 0");
}
</style><path class="yh1z_5bur"/>`,
		"fallback": "fluent:shifts-availability-24-regular",
	});
}

export default Component;
