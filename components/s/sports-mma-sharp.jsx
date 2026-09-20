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
		"content": `<style>.g2lh7abvt {
  fill: currentColor;
  d: path("M8 19.616v-3.232h8.077v3.231zM7.039 15l-.808-4.05V3.846h10v2.77h1.538v4.296L16.923 15zM9 9.77h4.462V8H9z");
}
</style><path class="g2lh7abvt"/>`,
		"fallback": "material-symbols-light:sports-mma-sharp",
	});
}

export default Component;
