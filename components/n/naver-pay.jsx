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
		"content": `<style>.tv9yb2b2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.366 19.317v5.114c0 1.712-1.437 3.1-3.21 3.1s-3.209-1.388-3.209-3.1v-5.114m-3.906 5.114c0 1.712-1.437 3.1-3.21 3.1s-3.209-1.388-3.209-3.1v-2.015c0-1.711 1.437-3.1 3.21-3.1s3.209 1.389 3.209 3.1m0 5.114v-8.213m-16.407 5.114c0 1.712 1.437 3.1 3.21 3.1s3.209-1.388 3.209-3.1v-2.015c0-1.711-1.437-3.1-3.21-3.1s-3.21 1.389-3.21 3.1m.001-3.099v12.398");
}

.xea6-bmtk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.366 24.431v4.184c0 1.712-1.437 3.1-3.21 3.1a3.26 3.26 0 0 1-2.269-.908");
}

.xm9uzjeuh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24");
}
</style><path class="xea6-bmtk"/><path class="tv9yb2b2s"/><path class="xm9uzjeuh"/>`,
		"fallback": "arcticons:naver-pay",
	});
}

export default Component;
