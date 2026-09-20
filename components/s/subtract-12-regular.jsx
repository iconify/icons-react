import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vjwt6hbfj {
  fill: currentColor;
  d: path("M2 6a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 2 6");
}
</style><path class="vjwt6hbfj"/>`,
		"fallback": "fluent:subtract-12-regular",
	});
}

export default Component;
