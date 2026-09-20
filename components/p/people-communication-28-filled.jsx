import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tmuld--sz {
  fill: currentColor;
  d: path("M15.403 15.904a6.5 6.5 0 0 1 9.193 9.193a.75.75 0 0 1-1.06-1.06a5 5 0 1 0-7.072 0a.75.75 0 0 1-1.06 1.06a6.5 6.5 0 0 1 0-9.193m1.768 1.768a4 4 0 1 1 5.656 5.657a.75.75 0 0 1-1.06-1.061a2.5 2.5 0 1 0-3.536 0a.751.751 0 0 1-1.06 1.061a4 4 0 0 1 0-5.657m-2.276-2.665a7.5 7.5 0 0 0-2.104 7.562c-.894.266-1.977.431-3.291.431C2 23 2 17.75 2 17.75v-.5A2.25 2.25 0 0 1 4.25 15h10.5q.073.001.145.007M9.5 4a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9M20 6a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7");
}
</style><path class="tmuld--sz"/>`,
		"fallback": "fluent:people-communication-28-filled",
	});
}

export default Component;
