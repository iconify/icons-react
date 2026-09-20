import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jozy8mq9a {
  fill: currentColor;
  d: path("M15.854 4.854a.5.5 0 0 0-.708-.708l-7.408 7.409a3 3 0 1 0 .707.707zM4 14a2 2 0 1 1 4 0a2 2 0 0 1-4 0");
}
</style><path class="jozy8mq9a"/>`,
		"fallback": "fluent:line-flow-diagonal-up-right-20-regular",
	});
}

export default Component;
