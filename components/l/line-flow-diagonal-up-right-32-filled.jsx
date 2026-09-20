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
		"content": `<style>.ouxbkjcpj {
  fill: currentColor;
  d: path("M26.707 6.707a1 1 0 0 0-1.414-1.414L11.618 18.968a5.5 5.5 0 1 0 1.414 1.414z");
}
</style><path class="ouxbkjcpj"/>`,
		"fallback": "fluent:line-flow-diagonal-up-right-32-filled",
	});
}

export default Component;
