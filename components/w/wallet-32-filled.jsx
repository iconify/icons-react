import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cu176wrva {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h16.75A3.25 3.25 0 0 1 26 6.25v1.006c1.748.618 3 2.285 3 4.244v13a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5V6.25h.01A3 3 0 0 1 3 6m21 .25C24 5.56 23.44 5 22.75 5H6a1 1 0 0 0 0 2h18zM21 18a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z");
}
</style><path class="cu176wrva"/>`,
		"fallback": "fluent:wallet-32-filled",
	});
}

export default Component;
