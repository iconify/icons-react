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
		"content": `<style>.w27-kqa2p {
  fill: currentColor;
  d: path("M7 18q-2.5 0-4.25-1.75T1 12t1.75-4.25T7 6q2.025 0 3.538 1.138T12.65 10H21q.825 0 1.413.588T23 12q0 .9-.625 1.45T21 14v2q0 .825-.587 1.413T19 18t-1.412-.587T17 16v-2h-4.35q-.6 1.725-2.113 2.863T7 18m0-4q.825 0 1.413-.587T9 12t-.587-1.412T7 10t-1.412.588T5 12t.588 1.413T7 14");
}
</style><path class="w27-kqa2p"/>`,
		"fallback": "material-symbols:vpn-key-rounded",
	});
}

export default Component;
