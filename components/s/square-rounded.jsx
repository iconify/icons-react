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
		"content": `<style>.gtg6kqbrp {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.934 3.934Q2.25 5.618 2.25 8v8q0 2.382 1.684 4.066T8 21.75h8q2.382 0 4.066-1.684T21.75 16V8q0-2.382-1.684-4.066T16 2.25H8q-2.382 0-4.066 1.684M8 3.75h8q1.76 0 3.005 1.245T20.25 8v8q0 1.76-1.245 3.005T16 20.25H8q-1.76 0-3.005-1.245T3.75 16V8q0-1.76 1.245-3.005T8 3.75");
}
</style><path class="gtg6kqbrp"/>`,
		"fallback": "uix-solid:square-rounded",
	});
}

export default Component;
