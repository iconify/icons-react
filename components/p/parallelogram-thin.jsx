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
		"content": `<style>.cybx5ookm {
  fill: currentColor;
  d: path("M242.07 49.48A12 12 0 0 0 232 44H88.81a12 12 0 0 0-11 7.08l-64.8 144A12 12 0 0 0 24 212h143.19a12 12 0 0 0 10.95-7.08l64.8-144a12 12 0 0 0-.87-11.44m-6.43 8.16l-64.8 144a4 4 0 0 1-3.65 2.36H24a4 4 0 0 1-3.65-5.64l64.8-144A4 4 0 0 1 88.81 52H232a4 4 0 0 1 3.65 5.64Z");
}
</style><path class="cybx5ookm"/>`,
		"fallback": "ph:parallelogram-thin",
	});
}

export default Component;
