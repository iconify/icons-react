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
		"content": `<style>.niu0fc39t {
  fill: currentColor;
  d: path("M15.854 4.854a.5.5 0 0 0-.708-.708l-7.408 7.409a3 3 0 1 0 .707.707z");
}
</style><path class="niu0fc39t"/>`,
		"fallback": "fluent:line-flow-diagonal-up-right-20-filled",
	});
}

export default Component;
