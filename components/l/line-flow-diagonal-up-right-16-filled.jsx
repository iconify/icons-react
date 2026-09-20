import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rzsgbkj8d {
  fill: currentColor;
  d: path("M12.854 3.854a.5.5 0 0 0-.708-.708L5.88 9.414a2.5 2.5 0 1 0 .707.707z");
}
</style><path class="rzsgbkj8d"/>`,
		"fallback": "fluent:line-flow-diagonal-up-right-16-filled",
	});
}

export default Component;
