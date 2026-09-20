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
		"content": `<style>.rruqnw1mu {
  fill: currentColor;
  d: path("M3 19v-7.77h1V18h16V6h-8.77V5H21v14zm14.267-3l.714-.713L13.669 11h3.312v-1h-5v5h1v-3.286zM3 8.846V5h5.846v3.846zM12 12");
}
</style><path class="rruqnw1mu"/>`,
		"fallback": "material-symbols-light:pip-exit-outline-sharp",
	});
}

export default Component;
