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
		"content": `<style>.mnk9m7b4j {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M92 96a12 12 0 1 1-12 12a12 12 0 0 1 12-12m80 86.92a8 8 0 0 1-10.92-2.92c-7.47-12.91-19.21-20-33.08-20s-25.61 7.1-33.08 20a8 8 0 1 1-13.84-8c10.29-17.79 27.39-28 46.92-28s36.63 10.2 46.92 28a8 8 0 0 1-2.92 10.92M164 120a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="mnk9m7b4j"/>`,
		"fallback": "ph:smiley-sad-fill",
	});
}

export default Component;
