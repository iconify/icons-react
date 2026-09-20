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
		"content": `<style>.a8w0ap3uv {
  fill: currentColor;
  d: path("M14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9M10 2a3.001 3.001 0 0 1 .5 5.96V9.5h1.709a5.5 5.5 0 0 0-1.482 1H6.5a.5.5 0 0 0-.5.5v1.041a3.002 3.002 0 0 1-.499 5.96A3 3 0 0 1 5 12.042V11a1.5 1.5 0 0 1 1.5-1.5h3V7.96A3.002 3.002 0 0 1 10 2m4.5 10a.5.5 0 0 0-.5.5V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.5-.5");
}
</style><path class="a8w0ap3uv"/>`,
		"fallback": "fluent:organization-add-20-filled",
	});
}

export default Component;
