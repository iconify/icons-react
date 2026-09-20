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
		"content": `<style>.s4jb2ibla {
  fill: currentColor;
  d: path("M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3zM4 14.5A1.5 1.5 0 0 0 5.5 16H7v-3H4zM8 16h4v-3H8zm5 0h1.5a1.5 1.5 0 0 0 1.5-1.5V13h-3zM5.5 4A1.5 1.5 0 0 0 4 5.5V12h8V4zM13 8v4h3V8zm0-1h3V5.5A1.5 1.5 0 0 0 14.5 4H13z");
}
</style><path class="s4jb2ibla"/>`,
		"fallback": "fluent:table-select-range-20-regular",
	});
}

export default Component;
