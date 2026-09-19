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
		"content": `<style>.wepzylo9q {
  fill: currentColor;
  d: path("m18 6.83l1.59 1.59L21 7l-4-4l-4 4l1.41 1.41L16 6.83V13H8c-1.1 0-2 .9-2 2v6h2v-6h8c1.1 0 2-.9 2-2z");
}
</style><path class="wepzylo9q"/>`,
		"fallback": "ic:outline-turn-sharp-right",
	});
}

export default Component;
