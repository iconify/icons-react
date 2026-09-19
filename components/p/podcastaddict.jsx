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
		"content": `<style>.asv1enbzx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.5 24a8.5 8.5 0 0 0-8.5-8.5m-2.314.319a8.501 8.501 0 1 0 10.497 10.49M15.5 43.754V24m22 0A13.5 13.5 0 0 0 24 10.5");
}

.cmxg30u6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5a21.5 21.5 0 1 0 13.5 38.222V45.5h8V24A21.5 21.5 0 0 0 24 2.5");
}

.jdisfxbxd {
  cx: 24px;
  cy: 24px;
  r: 3.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="jdisfxbxd"/><path class="asv1enbzx"/><path class="cmxg30u6j"/>`,
		"fallback": "arcticons:podcastaddict",
	});
}

export default Component;
