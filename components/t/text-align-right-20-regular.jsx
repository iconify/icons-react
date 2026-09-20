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
		"content": `<style>.jyu1_qhvj {
  fill: currentColor;
  d: path("M6 4.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m-4 5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5M9.5 14a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1z");
}
</style><path class="jyu1_qhvj"/>`,
		"fallback": "fluent:text-align-right-20-regular",
	});
}

export default Component;
