import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xtits7nht {
  fill: currentColor;
  d: path("M2 8.5A4.5 4.5 0 0 1 6.5 4h19A4.5 4.5 0 0 1 30 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 23.5zM25.5 27a3.5 3.5 0 0 0 3.5-3.5v-15A3.5 3.5 0 0 0 25.5 5H12v22z");
}
</style><path class="xtits7nht"/>`,
		"fallback": "fluent:panel-left-default-32-light",
	});
}

export default Component;
