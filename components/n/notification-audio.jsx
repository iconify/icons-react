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
		"content": `<style>.kzcxtabky {
  fill: currentColor;
  d: path("M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m8-3H4v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q.575.15 1.1.4t1 .6q-1.575.45-2.588 1.763T12 10q0 2.075 1.463 3.538T17 15q.275 0 .513-.025T18 14.9V17h2zm-3.75-6V7h1.5v6zm-2.75-1.5v-3H15v3zm5.5 0v-3h1.5v3z");
}
</style><path class="kzcxtabky"/>`,
		"fallback": "material-symbols:notification-audio",
	});
}

export default Component;
