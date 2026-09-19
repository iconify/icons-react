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
		"content": `<style>.ndl1ymb2g {
  cx: 34.224px;
  cy: 27.486px;
  r: 9.276px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qiypggbym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.986 28.317C21.556 23.132 14.5 13.033 4.5 14.587c8.903-4.43 24.022-5.733 32.693 4.117");
}
</style><circle class="ndl1ymb2g"/><path class="qiypggbym"/>`,
		"fallback": "arcticons:tiles-hop",
	});
}

export default Component;
