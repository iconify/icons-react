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
		"content": `<style>.jxpkxp7nh {
  fill: currentColor;
  d: path("M24.5 3A4.5 4.5 0 0 1 29 7.5v20.25a1.25 1.25 0 1 1-2.5 0V21.5a2 2 0 0 0-2-2h-17a2 2 0 0 0-2 2v6.25a1.25 1.25 0 1 1-2.5 0V7.5A4.5 4.5 0 0 1 7.5 3zm-17 9.5a2 2 0 0 0-2 2v2.968a4.5 4.5 0 0 1 2-.468h17c.718 0 1.398.168 2 .468V14.5a2 2 0 0 0-2-2zm0-7a2 2 0 0 0-2 2v2.968a4.5 4.5 0 0 1 2-.468h17c.718 0 1.398.168 2 .468V7.5a2 2 0 0 0-2-2z");
}
</style><path class="jxpkxp7nh"/>`,
		"fallback": "fluent:stack-vertical-32-filled",
	});
}

export default Component;
