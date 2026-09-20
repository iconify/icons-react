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
		"content": `<style>.yqltqchne {
  fill: currentColor;
  d: path("M9.93 14.6L12 13l2.02 1.562l-.782-2.516l2.147-1.661H12.83L12 7.83l-.83 2.554H8.615l2.096 1.661zM12 20.962q-3.014-.895-5.007-3.651T5 11.1V5.692l7-2.615l7 2.615V11.1q0 3.454-1.993 6.21T12 20.963");
}
</style><path class="yqltqchne"/>`,
		"fallback": "material-symbols-light:local-police",
	});
}

export default Component;
