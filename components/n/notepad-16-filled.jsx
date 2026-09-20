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
		"content": `<style>.wco9emk0o {
  fill: currentColor;
  d: path("M5 1a.5.5 0 0 1 .5.5V2h2v-.5a.5.5 0 0 1 1 0V2h2v-.5a.5.5 0 0 1 1 0V2A1.5 1.5 0 0 1 13 3.5V10H9.5A1.5 1.5 0 0 0 8 11.5V15H4.5A1.5 1.5 0 0 1 3 13.5v-10A1.5 1.5 0 0 1 4.5 2v-.5A.5.5 0 0 1 5 1m.5 4.5A.5.5 0 0 0 6 6h4a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5m0 3A.5.5 0 0 0 6 9h4a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5m0 3a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5M9 14.69q.077-.06.146-.13l3.415-3.414q.07-.07.128-.146H9.5a.5.5 0 0 0-.5.5z");
}
</style><path class="wco9emk0o"/>`,
		"fallback": "fluent:notepad-16-filled",
	});
}

export default Component;
