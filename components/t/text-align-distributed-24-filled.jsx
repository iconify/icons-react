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
		"content": `<style>.b3iohhc1k {
  fill: currentColor;
  d: path("M4.293 3.293a1 1 0 0 1 1.414 1.414L5.414 5H21a1 1 0 1 1 0 2H5.414l.293.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414zM18.586 19l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 1.414l.293.293H3a1 1 0 1 0 0 2zM3 11a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z");
}
</style><path class="b3iohhc1k"/>`,
		"fallback": "fluent:text-align-distributed-24-filled",
	});
}

export default Component;
