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
		"content": `<style>.y-d-pibhe {
  fill: currentColor;
  d: path("M17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zM3 15v-2h4v4H5a2 2 0 0 1-2-2m5 2v-4h4v3.5a.5.5 0 0 1-.5.5zm0-5h4V8H8zM3 8v4h4V8zm9-1H8V3h3.5a.5.5 0 0 1 .5.5zM3 7V5a2 2 0 0 1 2-2h2v4z");
}
</style><path class="y-d-pibhe"/>`,
		"fallback": "fluent:table-stack-right-20-filled",
	});
}

export default Component;
