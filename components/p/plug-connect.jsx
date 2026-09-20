import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jvfciyyhe {
  fill: currentColor;
  d: path("M7.77 19v-1.115H6.403q-1.002 0-1.703-.69T4 15.519V12.5H2v-1h2V8.48q0-.985.701-1.675t1.703-.69h1.365V5h1v14zm7.46 0v-3.712h-3.75v-1h3.75V9.712h-3.75v-1h3.75V5h1v1.116h1.366q1.002 0 1.703.69T20 8.48v3.02h2v1h-2v3.02q0 .985-.701 1.675t-1.703.69h-1.365V19z");
}
</style><path class="jvfciyyhe"/>`,
		"fallback": "material-symbols-light:plug-connect",
	});
}

export default Component;
