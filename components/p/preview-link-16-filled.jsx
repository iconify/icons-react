import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m7u7vvblg {
  fill: currentColor;
  d: path("M4 5v1h8V5zm6 4v2.005h2V9zM1 4.75A2.75 2.75 0 0 1 3.75 2h8.5A2.75 2.75 0 0 1 15 4.75v6.5A2.75 2.75 0 0 1 12.25 14h-8.5A2.75 2.75 0 0 1 1 11.25zm2-.25v2a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5m6 4v3.005a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V8.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5m-5.5 0a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM3 11a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5");
}
</style><path class="m7u7vvblg"/>`,
		"fallback": "fluent:preview-link-16-filled",
	});
}

export default Component;
