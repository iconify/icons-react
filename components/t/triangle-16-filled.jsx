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
		"content": `<style>.miy6bfbkx {
  fill: currentColor;
  d: path("M6.687 1.777a1.5 1.5 0 0 1 2.629 0l5.499 9.999a1.5 1.5 0 0 1-1.314 2.223H2.502a1.5 1.5 0 0 1-1.314-2.223z");
}
</style><path class="miy6bfbkx"/>`,
		"fallback": "fluent:triangle-16-filled",
	});
}

export default Component;
