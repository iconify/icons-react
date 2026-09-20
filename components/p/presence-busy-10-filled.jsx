import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.crb63ug3l {
  fill: currentColor;
  d: path("M10 5A5 5 0 1 1 0 5a5 5 0 0 1 10 0");
}
</style><path class="crb63ug3l"/>`,
		"fallback": "fluent:presence-busy-10-filled",
	});
}

export default Component;
