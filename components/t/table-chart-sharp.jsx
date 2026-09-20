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
		"content": `<style>.z58tk59sw {
  fill: currentColor;
  d: path("M3 8V3h18v5zm0 13V10h4.5v11zm13.5 0V10H21v11zm-7 0V10h5v11z");
}
</style><path class="z58tk59sw"/>`,
		"fallback": "material-symbols:table-chart-sharp",
	});
}

export default Component;
