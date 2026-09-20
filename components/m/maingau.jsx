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
		"content": `<style>.ydqthzbbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4");
}

.yv77b9ehh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.049 16.962v13.51H38.5m-29 .162h6.426M9.5 17.908h6.426M9.5 24.271h4.177M9.5 17.908v12.726m9.02-1.119c.918 1.015 2.02 1.523 3.673 1.523h2.205c2.02 0 3.673-1.523 3.673-3.384s-1.653-3.383-3.673-3.383H22.01c-2.02 0-3.674-1.522-3.674-3.383s1.653-3.384 3.674-3.384h2.204c1.653 0 2.755.338 3.674 1.523");
}
</style><path class="yv77b9ehh"/><path class="ydqthzbbt"/>`,
		"fallback": "arcticons:maingau",
	});
}

export default Component;
