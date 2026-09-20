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
		"content": `<style>.b3igy7b7n {
  fill: currentColor;
  d: path("M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0S0 5.373 0 12s5.373 12 12 12m5.06-13.44l-5.5 5.5a1.5 1.5 0 0 1-2.12 0l-2-2a1.5 1.5 0 0 1 2.12-2.12l.94.939l4.44-4.44a1.5 1.5 0 0 1 2.12 2.122");
}
</style><path class="b3igy7b7n"/>`,
		"fallback": "fluent:presence-available-24-filled",
	});
}

export default Component;
