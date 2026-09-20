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
		"content": `<style>.ostgovb9y {
  fill: currentColor;
  d: path("M2.5 1.5A.5.5 0 0 1 3 1h3.5a.5.5 0 0 1 .41.787L3.96 6H6.5a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.41-.787L5.54 2H3a.5.5 0 0 1-.5-.5m2.962 6.808a.5.5 0 0 0-.923 0l-2.5 6a.5.5 0 1 0 .923.384L3.667 13h2.667l.705 1.692a.5.5 0 0 0 .923-.384zM4.084 12L5 9.8l.917 2.2zM12.5 1a.5.5 0 0 1 .5.5v11.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L12 13.293V1.5a.5.5 0 0 1 .5-.5");
}
</style><path class="ostgovb9y"/>`,
		"fallback": "fluent:text-sort-descending-16-regular",
	});
}

export default Component;
