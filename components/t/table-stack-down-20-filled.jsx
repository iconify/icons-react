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
		"content": `<style>.zd5ep1vge {
  fill: currentColor;
  d: path("M16.5 17a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1zM5 3h2v4H3V5a2 2 0 0 1 2-2M3 8h4v4H3.5a.5.5 0 0 1-.5-.5zm5 0v4h4V8zm4-5H8v4h4zm1 9V8h4v3.5a.5.5 0 0 1-.5.5zm0-9h2a2 2 0 0 1 2 2v2h-4z");
}
</style><path class="zd5ep1vge"/>`,
		"fallback": "fluent:table-stack-down-20-filled",
	});
}

export default Component;
