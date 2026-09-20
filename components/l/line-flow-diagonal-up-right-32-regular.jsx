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
		"content": `<style>.rj4hnfh7f {
  fill: currentColor;
  d: path("M26.707 6.707a1 1 0 0 0-1.414-1.414L11.618 18.968a5.5 5.5 0 1 0 1.414 1.414zM5 23.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0");
}
</style><path class="rj4hnfh7f"/>`,
		"fallback": "fluent:line-flow-diagonal-up-right-32-regular",
	});
}

export default Component;
