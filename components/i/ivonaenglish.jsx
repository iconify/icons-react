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
		"content": `<style>.gwiga8bef {
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 10;
  d: path("M33.614 36.43h-6.08V26.338a3.53 3.53 0 0 0-1.474-2.873l-8.639-6.195a3.535 3.535 0 1 0-4.12 5.744l7.164 5.138v8.278h-6.079a3.535 3.535 0 0 0 0 7.07h19.228a3.535 3.535 0 0 0 0-7.07Z");
}

.ljpxaabfh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.854 11.917h14.833m-7.417 7.416V4.5m-5.962 11.816l11.924-8.799m-11.924 0l11.924 8.799");
}

.smomcxbck {
  cx: 27.27px;
  cy: 11.917px;
  r: 7.417px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="gwiga8bef"/><circle class="smomcxbck"/><path class="ljpxaabfh"/>`,
		"fallback": "arcticons:ivonaenglish",
	});
}

export default Component;
