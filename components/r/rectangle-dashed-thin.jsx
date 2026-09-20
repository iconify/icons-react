import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pkj7ncbof {
  fill: currentColor;
  d: path("M76 48a4 4 0 0 1-4 4H40a4 4 0 0 0-4 4v16a4 4 0 0 1-8 0V56a12 12 0 0 1 12-12h32a4 4 0 0 1 4 4M32 148a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m40 56H40a4 4 0 0 1-4-4v-16a4 4 0 0 0-8 0v16a12 12 0 0 0 12 12h32a4 4 0 0 0 0-8m72 0h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m80-24a4 4 0 0 0-4 4v16a4 4 0 0 1-4 4h-32a4 4 0 0 0 0 8h32a12 12 0 0 0 12-12v-16a4 4 0 0 0-4-4m0-72a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m-8-64h-32a4 4 0 0 0 0 8h32a4 4 0 0 1 4 4v16a4 4 0 0 0 8 0V56a12 12 0 0 0-12-12m-72 0h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8");
}
</style><path class="pkj7ncbof"/>`,
		"fallback": "ph:rectangle-dashed-thin",
	});
}

export default Component;
