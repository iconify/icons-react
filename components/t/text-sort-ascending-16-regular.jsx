import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q5k3k4qvs {
  fill: currentColor;
  d: path("M5.462 1.308a.5.5 0 0 0-.923 0l-2.5 6a.5.5 0 0 0 .923.384L3.667 6h2.666l.705 1.692a.5.5 0 1 0 .924-.384zM4.083 5L5 2.8L5.917 5zM2.5 9.5A.5.5 0 0 1 3 9h3.5a.5.5 0 0 1 .41.787L3.96 14H6.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.41-.787L5.54 10H3a.5.5 0 0 1-.5-.5m10-8.5a.5.5 0 0 1 .5.5v11.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L12 13.293V1.5a.5.5 0 0 1 .5-.5");
}
</style><path class="q5k3k4qvs"/>`,
		"fallback": "fluent:text-sort-ascending-16-regular",
	});
}

export default Component;
