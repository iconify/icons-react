import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.osm-8ebpg {
  fill: currentColor;
  d: path("M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14s14-6.268 14-14S23.732 2 16 2m-2.5 8a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V11a1 1 0 0 1 1-1m10 1v10a1 1 0 1 1-2 0V11a1 1 0 1 1 2 0M18 12.5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1M10 14v4a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0");
}
</style><path class="osm-8ebpg"/>`,
		"fallback": "fluent:sound-wave-circle-32-filled",
	});
}

export default Component;
