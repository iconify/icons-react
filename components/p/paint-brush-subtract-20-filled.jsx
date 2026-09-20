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
		"content": `<style>.q-7dqtbnc {
  fill: currentColor;
  d: path("M10 2v2.5a.5.5 0 0 0 1 0V2h1v3.5a.5.5 0 0 0 1 0V2h1.5a.5.5 0 0 1 .5.5V9H5V2.5a.5.5 0 0 1 .5-.5zM9 14.5c0-1.86.923-3.505 2.337-4.5H5v1.004a2 2 0 0 0 2 2h1V16a2 2 0 0 0 2.245 1.985A5.48 5.48 0 0 1 9 14.5m5.5 4.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9M12 14.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5");
}
</style><path class="q-7dqtbnc"/>`,
		"fallback": "fluent:paint-brush-subtract-20-filled",
	});
}

export default Component;
