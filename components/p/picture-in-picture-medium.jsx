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
		"content": `<style>.pbwsp-o5x {
  fill: currentColor;
  d: path("M2 20v-2h18V4h2v14q0 .825-.587 1.413T20 20zm6-4V8h10v8z");
}
</style><path class="pbwsp-o5x"/>`,
		"fallback": "material-symbols:picture-in-picture-medium",
	});
}

export default Component;
