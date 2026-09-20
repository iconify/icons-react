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
		"content": `<style>.hlha389cu {
  fill: currentColor;
  d: path("M4 19v-4.712h1.923V19zm4.673-5.577V9.635h1.943v3.788zm4.693-4.654V5h1.942v3.77zM18.058 19V5H20v14z");
}
</style><path class="hlha389cu"/>`,
		"fallback": "material-symbols-light:waterfall-chart-sharp",
	});
}

export default Component;
