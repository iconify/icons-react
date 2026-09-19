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
		"content": `<style>.aqwgzacmn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.377 24.217a7.377 7.377 0 0 1-14.754 0M24 31.594V35.5m-5.207 0h10.414");
}

.q8jy3d4_f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.712 24.217a4.712 4.712 0 0 1-9.424 0v-7.005a4.712 4.712 0 0 1 9.424 0z");
}

.uvixfrc4b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.502c-11.884.013-21.508 9.657-21.495 21.541A21.5 21.5 0 0 0 5.152 34.36l-1.65 10.139l10.139-1.65c10.41 5.71 23.477 1.901 29.188-8.509s1.9-23.477-8.509-29.187A21.5 21.5 0 0 0 24 2.502");
}
</style><path class="uvixfrc4b"/><path class="q8jy3d4_f"/><path class="aqwgzacmn"/>`,
		"fallback": "arcticons:wa-kit",
	});
}

export default Component;
