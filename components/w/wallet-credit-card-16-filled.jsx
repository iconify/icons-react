import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vxqb8rb0c {
  fill: currentColor;
  d: path("M9.368 1.222a1 1 0 0 0-1.414.15L5.058 5h1.28l2.397-3.004l.77.629L7.575 5h1.288l1.417-1.744l1.718 1.403L11.7 5h.3a3 3 0 0 1 .88.131a1 1 0 0 0-.25-1.245zM3 5.5a.5.5 0 0 1 .5-.5h.558l.795-1H3.5A1.5 1.5 0 0 0 2 5.5v6A2.5 2.5 0 0 0 4.5 14H12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H3.5a.5.5 0 0 1-.5-.5m7.5 4.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1");
}
</style><path class="vxqb8rb0c"/>`,
		"fallback": "fluent:wallet-credit-card-16-filled",
	});
}

export default Component;
