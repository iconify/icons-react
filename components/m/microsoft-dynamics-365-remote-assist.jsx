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
		"content": `<style>.cci975bqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23 13.518l-7.578 4.375a2 2 0 0 0-1 1.732v8.75a2 2 0 0 0 1 1.733L23 34.483a2 2 0 0 0 2 0l7.578-4.375a2 2 0 0 0 1-1.733v-8.75a2 2 0 0 0-1-1.732L25 13.518a2 2 0 0 0-2 0");
}

.vsidsabva {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23 2.768l-16.887 9.75a2 2 0 0 0-1 1.732v19.5a2 2 0 0 0 1 1.732L23 45.232a2 2 0 0 0 2 0l16.887-9.75a2 2 0 0 0 1-1.732v-19.5a2 2 0 0 0-1-1.732L25 2.768a2 2 0 0 0-2 0M14.422 19.78l-9.309 5.375m28.465 3.065l9.309-5.375");
}
</style><path class="cci975bqz"/><path class="vsidsabva"/>`,
		"fallback": "arcticons:microsoft-dynamics-365-remote-assist",
	});
}

export default Component;
