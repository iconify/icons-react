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
		"content": `<style>.rw03mbbvs {
  fill: currentColor;
  d: path("M2 5.75A.75.75 0 0 1 2.75 5h18.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 5.75m0 13a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75m.75-7.25a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="rw03mbbvs"/>`,
		"fallback": "fluent:text-align-justify-24-regular",
	});
}

export default Component;
