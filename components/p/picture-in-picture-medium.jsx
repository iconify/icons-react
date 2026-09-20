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
		"content": `<style>.opjb4nsqm {
  fill: currentColor;
  d: path("M3 19v-1h16.385q.23 0 .307-.192q.077-.193.077-.424V5H21v12.385q0 .69-.462 1.153T19.385 19zm4.923-3.384V7.923h9.693v7.693z");
}
</style><path class="opjb4nsqm"/>`,
		"fallback": "material-symbols-light:picture-in-picture-medium",
	});
}

export default Component;
