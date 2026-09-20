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
		"content": `<style>.gaj4gh-hq {
  fill: currentColor;
  d: path("M4 24c0-8.284 6.716-15 15-15h10c8.284 0 15 6.716 15 15s-6.716 15-15 15H19c-8.284 0-15-6.716-15-15m15-12.5c-6.904 0-12.5 5.596-12.5 12.5S12.096 36.5 19 36.5h10c6.904 0 12.5-5.596 12.5-12.5S35.904 11.5 29 11.5z");
}
</style><path class="gaj4gh-hq"/>`,
		"fallback": "fluent:oval-48-regular",
	});
}

export default Component;
