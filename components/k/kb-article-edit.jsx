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
		"content": `<style>.ot4cf395h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21 12.392V3.5c-4 0-7 .5-9 2c-2-1.5-5-2-9-2v14c4 0 7 .5 9 2q.088-.066.179-.13M12 5.5v14m8.652-4.152za1.25 1.25 0 0 1 0 1.768l-3.536 3.536a1.25 1.25 0 0 1-1.768 0a1.25 1.25 0 0 1 0-1.768l3.536-3.536a1.25 1.25 0 0 1 1.768 0");
}
</style><path class="ot4cf395h"/>`,
		"fallback": "uix:kb-article-edit",
	});
}

export default Component;
