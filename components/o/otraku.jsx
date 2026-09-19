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
		"content": `<style>.e4c0zmatc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.753 40.676c.62-10.293 1.17-16.607.851-28.441M24 8.48A140 140 0 0 1 4.5 7.323");
}

.g6_xud7wo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 12.526v3.778H10.058m24.19 24.372c-.62-10.293-1.17-16.607-.852-28.441M24 8.48a140 140 0 0 0 19.5-1.156M24 16.304h13.942");
}

.xqzyaac_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m7.73 7.716l-.038 3.792A112 112 0 0 0 24 12.526a112 112 0 0 0 16.308-1.018l.012-3.797");
}
</style><path class="e4c0zmatc"/><path class="xqzyaac_v"/><path class="g6_xud7wo"/>`,
		"fallback": "arcticons:otraku",
	});
}

export default Component;
