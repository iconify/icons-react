import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lww4qrkkm {
  fill: currentColor;
  d: path("M16 4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM3 14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4h-2v3.5a.5.5 0 0 1-1 0V10h-2v3.5a.5.5 0 0 1-1 0V10H9v3.5a.5.5 0 0 1-1 0V10H6v3.5a.5.5 0 0 1-1 0V10H3zm2.25-8a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m3 0a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m4.25 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z");
}
</style><path class="lww4qrkkm"/>`,
		"fallback": "fluent:midi-20-filled",
	});
}

export default Component;
