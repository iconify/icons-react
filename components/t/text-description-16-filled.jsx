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
		"content": `<style>.ihz07iknx {
  fill: currentColor;
  d: path("M1.75 3a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zM1 9.75A.75.75 0 0 1 1.75 9h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 9.75M1.75 12a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="ihz07iknx"/>`,
		"fallback": "fluent:text-description-16-filled",
	});
}

export default Component;
