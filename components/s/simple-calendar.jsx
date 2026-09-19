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
		"content": `<style>.lq8ccqeeh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.18 7.859a4 4 0 0 0-4 4V39.5a4 4 0 0 0 4 4h27.64a4 4 0 0 0 4-4V11.859a4 4 0 0 0-4-4z");
}

.y5pepgnpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.5 32.926h6.778v6.399H10.5zm10.111 0h6.778v6.399h-6.778zm10.111 0H37.5v6.399h-6.778zM10.5 23.697h6.778v6.399H10.5zm10.111 0h6.778v6.399h-6.778zm10.111 0H37.5v6.399h-6.778zm0-8.804H37.5v6.399h-6.778zm-17.905-4.635V4.5m22.366 5.758V4.5");
}
</style><path class="lq8ccqeeh"/><path class="y5pepgnpq"/>`,
		"fallback": "arcticons:simple-calendar",
	});
}

export default Component;
