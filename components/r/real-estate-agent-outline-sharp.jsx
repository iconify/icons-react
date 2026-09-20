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
		"content": `<style>.qbn3ldb6n {
  fill: currentColor;
  d: path("m14 22.5l-7-1.95V22H1V11h7.95L17 14v2h5v4zM3 20h2v-7H3zm10.95.4l5.95-1.85V18h-7.075L9.7 16.95l.6-1.9l2.925.95H15v-.65L8.6 13H7v5.5zM19 14V7.5L14 4L9 7.5V9H7V6.5l7-5l7 5V14zm-4.5-6h1V7h-1zm-2 0h1V7h-1zm2 2h1V9h-1zm-2 0h1V9h-1z");
}
</style><path class="qbn3ldb6n"/>`,
		"fallback": "material-symbols:real-estate-agent-outline-sharp",
	});
}

export default Component;
