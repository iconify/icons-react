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
		"content": `<style>.k1e9flb-r {
  fill: currentColor;
  d: path("m12 23l-3-3H3V2h18v18h-6zm0-7q2.15 0 3.575-1.5T17 11V6h-5Q9.975 6 8.488 7.425T7 11q0 .75.213 1.425t.587 1.25l-1.1 1.1l1.35 1.35l1.025-1q.675.425 1.4.65T12 16m-2.75-3.775l3.3-3.3l1.425 1.4l-3.4 3.325z");
}
</style><path class="k1e9flb-r"/>`,
		"fallback": "material-symbols:nest-found-savings-sharp",
	});
}

export default Component;
