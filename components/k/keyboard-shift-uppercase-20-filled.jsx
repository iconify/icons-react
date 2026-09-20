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
		"content": `<style>.ab7xasouh {
  fill: currentColor;
  d: path("M11.144 2.53a1.5 1.5 0 0 0-2.288 0l-6.617 7.803a1 1 0 0 0 .763 1.647H6v3.017a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V11.98h2.996a1 1 0 0 0 .763-1.647zM6.5 17a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z");
}
</style><path class="ab7xasouh"/>`,
		"fallback": "fluent:keyboard-shift-uppercase-20-filled",
	});
}

export default Component;
