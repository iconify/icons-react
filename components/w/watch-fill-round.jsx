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
		"content": `<style>.ixp0i4b6w {
  fill: currentColor;
  d: path("M8 7.527V6a4 4 0 0 1 8 0v1.527a6 6 0 0 1 0 8.946V18a4 4 0 0 1-8 0v-1.527a6 6 0 0 1 0-8.946m2-1.186a6.03 6.03 0 0 1 4 0V6a2 2 0 1 0-4 0ZM13 10a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2h-1Zm-3 7.659V18a2 2 0 1 0 4 0v-.341a6.03 6.03 0 0 1-4 0");
}
</style><path class="ixp0i4b6w"/>`,
		"fallback": "coolicons:watch-fill-round",
	});
}

export default Component;
