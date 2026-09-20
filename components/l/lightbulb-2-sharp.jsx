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
		"content": `<style>.qmudjrg8b {
  fill: currentColor;
  d: path("M8.75 17.616v-3.558q-1.29-.84-2.02-2.174Q6 10.552 6 9.02q0-2.502 1.749-4.26T12 3t4.251 1.749T18 9q0 1.552-.73 2.882t-2.02 2.176v3.557zM9.673 21v-1h4.654v1z");
}
</style><path class="qmudjrg8b"/>`,
		"fallback": "material-symbols-light:lightbulb-2-sharp",
	});
}

export default Component;
