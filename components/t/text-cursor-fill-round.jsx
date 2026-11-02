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
		"content": `<style>.xk3pjcbbh {
  fill: currentColor;
  d: path("M12 3.998a5.04 5.04 0 0 1 2.053-1.605A5 5 0 0 1 16 2a1 1 0 0 1 0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3a1 1 0 0 1 0 2a5 5 0 0 1-1.947-.393A5.04 5.04 0 0 1 12 20.002a5.04 5.04 0 0 1-2.053 1.605A5 5 0 0 1 8 22a1 1 0 0 1 0-2a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3a1 1 0 0 1 0-2a5 5 0 0 1 1.947.393A5.04 5.04 0 0 1 12 3.998");
}
</style><path class="xk3pjcbbh"/>`,
		"fallback": "coolicons:text-cursor-fill-round",
	});
}

export default Component;
