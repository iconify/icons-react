import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jjre0yb5e {
  fill: currentColor;
  d: path("M4.64 19.37c3.03 3.03 7.67 3.44 11.15 1.25l-1.46-1.46c-2.66 1.43-6.04 1.03-8.28-1.21a7.007 7.007 0 0 1 0-9.9C7.42 6.69 9.21 6.03 11 6.03V9l4-4l-4-4v3.01c-2.3 0-4.61.87-6.36 2.63c-3.52 3.51-3.52 9.21 0 12.73");
}

.wr6hucbfv {
  fill: currentColor;
  d: path("m17 7l-6 6l6 6l6-6z");
}
</style><path class="jjre0yb5e"/><path class="wr6hucbfv"/>`,
		"fallback": "ic:sharp-rotate-90-degrees-cw",
	});
}

export default Component;
