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
		"content": `<style>.jhi2e5t_g {
  fill: currentColor;
  d: path("M2 4.5v7A2.5 2.5 0 0 0 4.5 14h2.764a3 3 0 0 1-.593-1H4.5A1.5 1.5 0 0 1 3 11.5v-3h3.67a3 3 0 0 1 .594-1H3v-3A1.5 1.5 0 0 1 4.5 3h3v4.264a3 3 0 0 1 1-.593V3h3A1.5 1.5 0 0 1 13 4.5v2.17a3 3 0 0 1 1 .594V4.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5m5.5 4.75c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 12.25 14h-3a1.75 1.75 0 0 1-1.75-1.75z");
}
</style><path class="jhi2e5t_g"/>`,
		"fallback": "fluent:table-simple-include-16-regular",
	});
}

export default Component;
