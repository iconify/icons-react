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
		"content": `<style>.jc-2vnbxi {
  fill: currentColor;
  d: path("m223.72 117.9l-22.39-82.11A16 16 0 0 0 185.89 24H70.11a16 16 0 0 0-15.44 11.79L32.28 117.9a8.1 8.1 0 0 0 0 4.2l22.39 82.11A16 16 0 0 0 70.11 216H80l-14.4 19.2a8 8 0 1 0 12.8 9.6L100 216h56l21.6 28.8a8 8 0 1 0 12.8-9.6L176 216h9.89a16 16 0 0 0 15.44-11.79l22.39-82.11a8.1 8.1 0 0 0 0-4.2M70.11 40h115.78L206 113.69l-78 14.18l-78-14.18Zm-19 90.14L120 142.68V200H70.11ZM185.89 200H136v-57.32l68.94-12.54ZM88 88a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8");
}
</style><path class="jc-2vnbxi"/>`,
		"fallback": "ph:train-regional",
	});
}

export default Component;
