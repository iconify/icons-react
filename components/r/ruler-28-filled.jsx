import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.aoaui0aob {
  fill: currentColor;
  d: path("M9 2.628A2.74 2.74 0 0 1 10.75 2h6.5A2.75 2.75 0 0 1 20 4.75v18.5A2.75 2.75 0 0 1 17.25 26h-6.5A2.75 2.75 0 0 1 8 23.25V4.75a2.74 2.74 0 0 1 1-2.122m.5 3.122v1.5h2.75a.75.75 0 0 0 0-1.5zm0 3.75V11h4.75a.75.75 0 0 0 0-1.5zm0 3.75v1.5h2.75a.75.75 0 0 0 0-1.5zm0 3.75v1.5h4.75a.75.75 0 0 0 0-1.5zm0 3.75v1.5h2.75a.75.75 0 0 0 0-1.5z");
}
</style><path class="aoaui0aob"/>`,
		"fallback": "fluent:ruler-28-filled",
	});
}

export default Component;
