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
		"content": `<style>.az3autbvr {
  fill: currentColor;
  d: path("M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zM15 17h-2v-4h4v2a2 2 0 0 1-2 2m2-5h-4V8h3.5a.5.5 0 0 1 .5.5zm-5 0V8H8v4zm-4 5h4v-4H8zM7 8v4H3V8.5a.5.5 0 0 1 .5-.5zm0 9H5a2 2 0 0 1-2-2v-2h4z");
}
</style><path class="az3autbvr"/>`,
		"fallback": "fluent:table-stack-above-20-filled",
	});
}

export default Component;
