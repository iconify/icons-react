import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gzkw6_brs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.824 34.465a1.39 1.39 0 0 0 1.391 1.391h11.57a1.39 1.39 0 0 0 1.391-1.391M17.994 23.688h12.012M24 35.856V23.688m-3.744 17.628v.793a1.39 1.39 0 0 0 1.391 1.391h4.706a1.39 1.39 0 0 0 1.391-1.391v-.793");
}

.vi-9m1bek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.987 17.487a12.987 12.987 0 1 0-20.163 10.82v11.618a1.39 1.39 0 0 0 1.391 1.391h11.57a1.39 1.39 0 0 0 1.391-1.391V28.308a12.97 12.97 0 0 0 5.811-10.821");
}
</style><path class="vi-9m1bek"/><path class="gzkw6_brs"/>`,
		"fallback": "arcticons:pixel-tips",
	});
}

export default Component;
