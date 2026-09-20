import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sx0eidcqp {
  fill: currentColor;
  d: path("M10 5.75a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0m1 8.699C10.262 15.279 8.98 16 6.75 16C1.5 16 1.5 12 1.5 12a2 2 0 0 1 2-2H10a2 2 0 0 1 2 2s0 .105-.022.28A2 2 0 0 0 11 14zM14.5 9a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-1 3v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0m1 1v-1a1 1 0 1 1 2 0v1zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5");
}
</style><path class="sx0eidcqp"/>`,
		"fallback": "fluent:people-lock-20-filled",
	});
}

export default Component;
