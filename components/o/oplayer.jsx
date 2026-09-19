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
		"content": `<style>.d1uffop4h {
  cx: 42.905px;
  cy: 19.927px;
  r: 2.243px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xm_pooz_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m32.7 24l-13-7.51v15.02z");
}

.zud_8ibhe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.905 34.248a21.5 21.5 0 1 1-.01-20.516");
}
</style><path class="zud_8ibhe"/><path class="xm_pooz_w"/><circle class="d1uffop4h"/>`,
		"fallback": "arcticons:oplayer",
	});
}

export default Component;
