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
		"content": `<style>.op9xnsa6r {
  fill: currentColor;
  d: path("M3 19v-7.77h8.23V5H21v14zm14.267-3l.714-.713L13.669 11h3.312v-1h-5v5h1v-3.286zM3 8.846V5h5.846v3.846z");
}
</style><path class="op9xnsa6r"/>`,
		"fallback": "material-symbols-light:pip-exit-sharp",
	});
}

export default Component;
