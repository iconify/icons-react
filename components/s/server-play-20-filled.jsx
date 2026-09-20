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
		"content": `<style>.r2y7yc73n {
  fill: currentColor;
  d: path("M7.5 2A2.5 2.5 0 0 0 5 4.5v11A2.5 2.5 0 0 0 7.5 18h2.757a5.5 5.5 0 0 1-1.235-3H7.5a.5.5 0 0 1 0-1h1.522a5.5 5.5 0 0 1 .185-1H7.5a.5.5 0 0 1 0-1h2.1A5.5 5.5 0 0 1 15 9.022V4.5A2.5 2.5 0 0 0 12.5 2zM7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m12 9a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.287-.437l-2.97-1.65a.5.5 0 0 0-.743.437v3.3a.5.5 0 0 0 .743.437l2.97-1.65a.5.5 0 0 0 0-.874");
}
</style><path class="r2y7yc73n"/>`,
		"fallback": "fluent:server-play-20-filled",
	});
}

export default Component;
