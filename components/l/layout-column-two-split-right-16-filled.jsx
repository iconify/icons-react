import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jirby0x8c {
  fill: currentColor;
  d: path("M11.5 14h-3V8.5H14v3a2.5 2.5 0 0 1-2.5 2.5M14 7.5H8.5V2h3A2.5 2.5 0 0 1 14 4.5zM4.5 2h3v12h-3A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2");
}
</style><path class="jirby0x8c"/>`,
		"fallback": "fluent:layout-column-two-split-right-16-filled",
	});
}

export default Component;
