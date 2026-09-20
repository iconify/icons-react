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
		"content": `<style>.viyp-fb4d {
  fill: currentColor;
  d: path("M19.668 4.108a.5.5 0 0 0-.705.08L14.36 10h-2.551l5.587-7.054a2.5 2.5 0 0 1 3.522-.4l5.147 4.123a2.5 2.5 0 0 1 .522 3.33h-2.614l.907-1.052a.5.5 0 0 0-.066-.717L22.31 6.224L19.342 10h-2.544l3.95-5.026zM6 7a3 3 0 0 0-3 3v14.5A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-9a4.5 4.5 0 0 0-4.5-4.5H6a1 1 0 1 1 0-2h4.58l1.596-2zm15 12h3a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2");
}
</style><path class="viyp-fb4d"/>`,
		"fallback": "fluent:wallet-credit-card-32-filled",
	});
}

export default Component;
