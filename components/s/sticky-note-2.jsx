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
		"content": `<style>.hhmhwob-k {
  fill: currentColor;
  d: path("M5.616 20q-.667 0-1.141-.475T4 18.386V5.615q0-.666.475-1.14T5.615 4h12.77q.666 0 1.14.475T20 5.615v8.674L14.288 20zM14 19l5-5h-5zm-6.115-5.538H12v-1H7.885zm0-3.962h8.23v-1h-8.23z");
}
</style><path class="hhmhwob-k"/>`,
		"fallback": "material-symbols-light:sticky-note-2",
	});
}

export default Component;
