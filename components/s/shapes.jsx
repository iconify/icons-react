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
		"content": `<style>.nr9jtfble {
  fill: currentColor;
  d: path("M4.98 13.486Q3.23 11.74 3.23 9.234T4.977 4.98q1.746-1.75 4.251-1.75t4.255 1.746t1.749 4.251t-1.745 4.255t-4.251 1.749t-4.255-1.745m3.79 5.668v-1.165q.114.005.23.008t.23.003q3.655 0 6.212-2.558T18 9.231q0-.115-.003-.231l-.008-.23h1.165q.666 0 1.14.474t.475 1.14v8.77q0 .666-.474 1.14t-1.141.475h-8.77q-.666 0-1.14-.474t-.475-1.141");
}
</style><path class="nr9jtfble"/>`,
		"fallback": "material-symbols-light:shapes",
	});
}

export default Component;
