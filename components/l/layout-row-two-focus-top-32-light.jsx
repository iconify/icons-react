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
		"content": `<style>.q-dqpdb7q {
  fill: currentColor;
  d: path("M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3zM4 16h24v8.5a3.5 3.5 0 0 1-3.5 3.5h-17A3.5 3.5 0 0 1 4 24.5z");
}
</style><path class="q-dqpdb7q"/>`,
		"fallback": "fluent:layout-row-two-focus-top-32-light",
	});
}

export default Component;
