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
		"content": `<style>.av2o4bcwk {
  fill: currentColor;
  d: path("M11.288 20.713Q11 20.425 11 20v-6.975q-1.6 0-3.075-.612t-2.6-1.738t-1.725-2.6T3 5V4q0-.425.288-.712T4 3h1q1.575 0 3.05.613t2.6 1.737q.775.775 1.288 1.7t.787 1.975q.125-.175.275-.337t.325-.338q1.125-1.125 2.6-1.737T19 6h1q.425 0 .713.288T21 7v1q0 1.6-.612 3.075t-1.738 2.6t-2.587 1.725T13 16v4q0 .425-.288.713T12 21t-.712-.288");
}
</style><path class="av2o4bcwk"/>`,
		"fallback": "material-symbols:psychiatry-rounded",
	});
}

export default Component;
