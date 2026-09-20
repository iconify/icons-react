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
		"content": `<style>.ts1o89rzv {
  fill: currentColor;
  d: path("M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zM2 9.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z");
}
</style><path class="ts1o89rzv"/>`,
		"fallback": "fluent:line-horizontal-4-16-regular",
	});
}

export default Component;
