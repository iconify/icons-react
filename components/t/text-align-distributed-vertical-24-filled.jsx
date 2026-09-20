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
		"content": `<style>.isv6rdb8o {
  fill: currentColor;
  d: path("M19 5.414V21a1 1 0 1 1-2 0V5.414l-.293.293a1 1 0 1 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414zM5 18.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 1 0-1.414-1.414L7 18.586V3a1 1 0 1 0-2 0zM13 3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0z");
}
</style><path class="isv6rdb8o"/>`,
		"fallback": "fluent:text-align-distributed-vertical-24-filled",
	});
}

export default Component;
