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
		"content": `<style>.y11mbo-6j {
  fill: currentColor;
  d: path("M21 20a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h1.382l6.5-13l-1.776-3.553a1 1 0 1 1 1.788-.894L12 4.764l1.106-2.211a1 1 0 1 1 1.788.894L13.118 7l6.5 13Zm-9-5.5L9.8 20h4.4Z");
}
</style><path class="y11mbo-6j"/>`,
		"fallback": "coolicons:tent-fill",
	});
}

export default Component;
