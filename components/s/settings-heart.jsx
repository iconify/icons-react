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
		"content": `<style>.uag2p_bar {
  fill: currentColor;
  d: path("m12.05 16l3.5-3.5q.425-.425.55-1.037t-.125-1.188t-.75-.925T14.1 9t-1.125.388t-.925.812q-.45-.425-.937-.812T10 9t-1.137.338t-.763.912t-.112 1.188t.562 1.062zm-2.8 6l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2z");
}
</style><path class="uag2p_bar"/>`,
		"fallback": "material-symbols:settings-heart",
	});
}

export default Component;
