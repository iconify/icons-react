import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.peqb83hry {
  fill: currentColor;
  d: path("M16.58 6.41L15.16 5l-3.17 3.17L8.82 5L7.41 6.41L11.99 11zM7.42 17.59L8.84 19l3.17-3.17L15.18 19l1.41-1.41L12.01 13z");
}

.v6p_b6bev {
  fill: currentColor;
  d: path("M7.42 22.59L8.84 24l3.17-3.17L15.18 24l1.41-1.41L12.01 18z");
}

.y14yqobtv {
  fill: currentColor;
  d: path("M16.58 1.41L15.16 0l-3.17 3.17L8.82 0L7.41 1.41L11.99 6z");
}
</style><path class="y14yqobtv"/><path class="peqb83hry"/><path class="v6p_b6bev"/>`,
		"fallback": "ic:twotone-unfold-less-double",
	});
}

export default Component;
