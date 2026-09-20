import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fooxyzbuo {
  fill: currentColor;
  d: path("M9.5 0A2.5 2.5 0 0 1 12 2.5V3a.5.5 0 0 1-1 0v-.5a1.5 1.5 0 0 0-3 0V4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3V2.5A2.5 2.5 0 0 1 9.5 0M6 6.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5");
}
</style><path class="fooxyzbuo"/>`,
		"fallback": "fluent:lock-open-12-filled",
	});
}

export default Component;
