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
		"content": `<style>.bpxfz-b9u {
  fill: currentColor;
  d: path("M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m3.707 9.293a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L5.414 19h13.172l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 1.414l.293.293H5.414l.293-.293a1 1 0 0 0 0-1.414M3 11a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z");
}
</style><path class="bpxfz-b9u"/>`,
		"fallback": "fluent:text-align-distributed-evenly-24-filled",
	});
}

export default Component;
