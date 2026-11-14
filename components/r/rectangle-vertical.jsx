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
		"content": `<style>.hu9wd0b4e {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9 1.75h6q1.76 0 3.005 1.245T19.25 6v12q0 1.76-1.245 3.005T15 22.25H9q-1.76 0-3.005-1.245T4.75 18V6q0-1.76 1.245-3.005T9 1.75");
}
</style><path class="hu9wd0b4e"/>`,
		"fallback": "uix-solid:rectangle-vertical",
	});
}

export default Component;
