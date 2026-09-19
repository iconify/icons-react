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
		"content": `<style>.qvm-bhbqk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.484 15.826L5.005 28.61c-.977.98-.614 4.145 1.777 4.205c3.17.08 3.003-.042 4.854-.042m9.157-14.996c0-1.636-2.555-3.699-4.291-1.96m-2.084 9.786c0-1.4 1.133-2.536 2.53-2.536m-2.53 0v6.72m20.556-8.812v8.812m-1.328-6.72h2.657m-17.17 0v4.184c0 1.4 1.129 2.536 2.52 2.536s2.52-1.136 2.52-2.536v-4.184m.001 4.184v2.536m2.398-6.72v4.184c0 1.4 1.129 2.536 2.52 2.536s2.52-1.136 2.52-2.536v-4.184m.001 4.184v2.536m6.847-6.72v4.184c0 1.4 1.128 2.536 2.52 2.536s2.52-1.136 2.52-2.536v-4.184m0 4.184v2.536");
}
</style><path class="qvm-bhbqk"/>`,
		"fallback": "arcticons:ruutu",
	});
}

export default Component;
