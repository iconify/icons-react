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
		"content": `<style>.pyu165bdx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.375 2.25h9.25q2.123 0 3.624 1.501t1.501 3.624v9.25q0 2.123-1.501 3.624t-3.624 1.501h-9.25q-2.123 0-3.624-1.501T2.25 16.625v-9.25q0-2.123 1.501-3.624T7.375 2.25m.625 3Q5.25 5.25 5.25 8T8 10.75T10.75 8T8 5.25M13.25 8q0 2.75 2.75 2.75T18.75 8T16 5.25T13.25 8M8 13.25q-2.75 0-2.75 2.75T8 18.75T10.75 16T8 13.25M13.25 16q0 2.75 2.75 2.75T18.75 16T16 13.25T13.25 16");
}
</style><path class="pyu165bdx"/>`,
		"fallback": "uix-solid:perforated-metal",
	});
}

export default Component;
