import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.li4sxsbhp {
  fill: currentColor;
  d: path("M6 8a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0 1c.729 0 1.412-.195 2-.535V10.5a.5.5 0 0 1-.777.416L6 10.101l-1.223.815A.5.5 0 0 1 4 10.5V8.465C4.588 8.805 5.271 9 6 9");
}
</style><path class="li4sxsbhp"/>`,
		"fallback": "fluent:ribbon-12-filled",
	});
}

export default Component;
