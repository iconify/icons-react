import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wdxdpob1w {
  fill: currentColor;
  d: path("M2 5.4A2.4 2.4 0 0 1 4.4 3h.1a.5.5 0 0 1 0 1h-.1A1.4 1.4 0 0 0 3 5.4v.2A1.4 1.4 0 0 0 4.4 7h.1a.5.5 0 0 1 0 1h-.1A2.4 2.4 0 0 1 2 5.6zm8 0A2.4 2.4 0 0 0 7.6 3h-.1a.5.5 0 0 0 0 1h.1A1.4 1.4 0 0 1 9 5.4v.2A1.4 1.4 0 0 1 7.6 7h-.1a.5.5 0 0 0 0 1h.1A2.4 2.4 0 0 0 10 5.6zM4.5 5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z");
}
</style><path class="wdxdpob1w"/>`,
		"fallback": "fluent:link-12-regular",
	});
}

export default Component;
