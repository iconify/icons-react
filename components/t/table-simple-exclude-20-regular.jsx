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
		"content": `<style>.zkr4d-bpk {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5v8A2.5 2.5 0 0 0 4.5 15h4a.5.5 0 0 0 .5-.5V9h5.5a.5.5 0 0 0 .5-.5v-4A2.5 2.5 0 0 0 12.5 2zM8 9v5H4.5A1.5 1.5 0 0 1 3 12.5V9zm0-1H3V4.5A1.5 1.5 0 0 1 4.5 3H8zm1 0V3h3.5A1.5 1.5 0 0 1 14 4.5V8zm2 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z");
}
</style><path class="zkr4d-bpk"/>`,
		"fallback": "fluent:table-simple-exclude-20-regular",
	});
}

export default Component;
