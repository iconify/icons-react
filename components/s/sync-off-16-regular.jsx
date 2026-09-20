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
		"content": `<style>.df5-f5bny {
  fill: currentColor;
  d: path("M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0m-1 0H9.941l-.971 2.67a.5.5 0 1 1-.94-.34l2-5.5a.5.5 0 0 1 .94.34L10.305 7H12.9a5.002 5.002 0 0 0-9.8 0h3.14l.79-2.17a.5.5 0 0 1 .94.34l-2 5.5a.5.5 0 1 1-.94-.34L5.877 8H3a5 5 0 0 0 10 0");
}
</style><path class="df5-f5bny"/>`,
		"fallback": "fluent:sync-off-16-regular",
	});
}

export default Component;
