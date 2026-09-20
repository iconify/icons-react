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
		"content": `<style>.mxd09ijgv {
  fill: currentColor;
  d: path("M2 22V8h20v14zm2-2h16V10H4zm6-1l6-4l-6-4zM4 7V5h16v2zm3-3V2h10v2zM4 20V10z");
}
</style><path class="mxd09ijgv"/>`,
		"fallback": "material-symbols:subscriptions-outline-sharp",
	});
}

export default Component;
