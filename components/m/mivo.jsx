import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qh6bx5b9h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 19.954l.319 10.062l8.944-18.261v23.372l9.157-29.6l-.266 36.946l9.689-29.227l-.426 23.584L42.5 19.315v7.72");
}
</style><path class="qh6bx5b9h"/>`,
		"fallback": "arcticons:mivo",
	});
}

export default Component;
