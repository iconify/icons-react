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
		"content": `<style>.ulwpr_b9q {
  fill: currentColor;
  d: path("M8 18v-3.25q-1.425-.975-2.212-2.5T5 9q0-2.925 2.038-4.962T12 2t4.963 2.038T19 9q0 1.725-.788 3.238T16 14.75V18zm1 4v-2h6v2z");
}
</style><path class="ulwpr_b9q"/>`,
		"fallback": "material-symbols:lightbulb-2-sharp",
	});
}

export default Component;
