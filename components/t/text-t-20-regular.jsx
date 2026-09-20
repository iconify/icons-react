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
		"content": `<style>.m3wh9rs9d {
  fill: currentColor;
  d: path("M4 3.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V4h-4v12h1.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1H9V4H5v1.5a.5.5 0 0 1-1 0z");
}
</style><path class="m3wh9rs9d"/>`,
		"fallback": "fluent:text-t-20-regular",
	});
}

export default Component;
