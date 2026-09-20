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
		"content": `<style>.kuwzbbb9i {
  fill: currentColor;
  d: path("M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3zM10 9h12a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2m-1 7a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1m1 5h12a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2");
}
</style><path class="kuwzbbb9i"/>`,
		"fallback": "fluent:textbox-32-filled",
	});
}

export default Component;
