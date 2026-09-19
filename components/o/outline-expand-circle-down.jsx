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
		"content": `<style>.kasewt8rz {
  fill: currentColor;
  d: path("M15.08 9.59L12 12.67L8.92 9.59L7.5 11l4.5 4.5l4.5-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8");
}
</style><path class="kasewt8rz"/>`,
		"fallback": "ic:outline-expand-circle-down",
	});
}

export default Component;
