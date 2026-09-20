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
		"content": `<style>.chs7jabqo {
  fill: currentColor;
  d: path("M15 4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m-4 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M3.5 17a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M6 4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m8.115.75h-4.23a2.5 2.5 0 0 0 0-1.5h4.23a2.5 2.5 0 0 0 0 1.5M3.61 13.002l2.37-6.517c.394.302.88.49 1.41.513l-2.37 6.517a2.5 2.5 0 0 0-1.41-.513m6.505 3.248h-4.23a2.5 2.5 0 0 0 0-1.5h4.23a2.5 2.5 0 0 0 0 1.5m2.495-3.248l2.37-6.517c.394.302.88.49 1.41.513l-2.37 6.517a2.5 2.5 0 0 0-1.41-.513");
}
</style><path class="chs7jabqo"/>`,
		"fallback": "fluent:select-object-skew-20-filled",
	});
}

export default Component;
