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
		"content": `<style>.nihrfwb9j {
  fill: currentColor;
  d: path("M6.5 2H12v10H2V6.5A4.5 4.5 0 0 1 6.5 2M2 14v5a4.5 4.5 0 0 0 4.5 4.5H12V14zm21.5-2V6.5A4.5 4.5 0 0 0 19 2h-5v10zM16 19a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3z");
}
</style><path class="nihrfwb9j"/>`,
		"fallback": "fluent:table-simple-exclude-32-filled",
	});
}

export default Component;
