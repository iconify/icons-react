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
		"content": `<style>.aavy257cw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5v37h37");
}

.ibgss7dbn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.833 5.5C31.456 5.5 42.5 16.544 42.5 30.167h0M17.833 17.833c6.811 0 12.333 5.522 12.333 12.333h0");
}
</style><path class="ibgss7dbn"/><path class="aavy257cw"/>`,
		"fallback": "arcticons:listeningtrainer",
	});
}

export default Component;
