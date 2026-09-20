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
		"content": `<style>.mxj_ddb2t {
  fill: currentColor;
  d: path("m16.78 5.28l.72-.72v16.69a.75.75 0 0 0 1.5 0V4.56l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06M6 19.44l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V2.75a.75.75 0 0 1 1.5 0zm6.5-16.69a.75.75 0 0 0-1.5 0v18.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="mxj_ddb2t"/>`,
		"fallback": "fluent:text-align-distributed-vertical-24-regular",
	});
}

export default Component;
