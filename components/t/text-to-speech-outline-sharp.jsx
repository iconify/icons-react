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
		"content": `<style>.y3ixpt0qm {
  fill: currentColor;
  d: path("M2 22V2h10.15l-2 2H4v16h11v-2h2v4zm4-4v-2h7v2zm0-3v-2h5v2zm9 0l-4-4H8V6h3l4-4zm2-3.05v-6.9q.9.525 1.45 1.425T19 8.5t-.55 2.025T17 11.95m0 4.3v-2.1q1.75-.625 2.875-2.162T21 8.5t-1.125-3.488T17 2.85V.75q2.6.675 4.3 2.813T23 8.5t-1.7 4.938T17 16.25");
}
</style><path class="y3ixpt0qm"/>`,
		"fallback": "material-symbols:text-to-speech-outline-sharp",
	});
}

export default Component;
