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
		"content": `<style>.wwm7wacaj {
  fill: currentColor;
  d: path("M20 10V6h-4V4h4q.825 0 1.413.588T22 6v4zM2 10V6q0-.825.588-1.412T4 4h4v2H4v4zm2 10q-.825 0-1.412-.587T2 18v-4h2v4h4v2zm5.5-3.5v-9l7 4.5zm5.5 7.475v-2h8v2zM19 21l-4-4l1.4-1.4l1.6 1.55V13h2v4.15l1.6-1.55L23 17z");
}
</style><path class="wwm7wacaj"/>`,
		"fallback": "material-symbols:video-frame-save",
	});
}

export default Component;
