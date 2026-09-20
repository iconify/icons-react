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
		"content": `<style>.mmslpt93h {
  fill: currentColor;
  d: path("M11.999 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-5 10.784V16.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-1.716a.5.5 0 0 1 .153-.36l3.703-3.564a.5.5 0 0 0-.347-.86H3.49a.5.5 0 0 0-.346.86l3.702 3.564a.5.5 0 0 1 .154.36M8.499 7a1.5 1.5 0 0 0-1.5 1.5V9h6v-.5a1.5 1.5 0 0 0-1.5-1.5z");
}
</style><path class="mmslpt93h"/>`,
		"fallback": "fluent:presenter-20-filled",
	});
}

export default Component;
