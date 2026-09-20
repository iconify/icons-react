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
		"content": `<style>.a34b0acmk {
  fill: currentColor;
  d: path("m8.9 22l1.2-3.8L7 16h3.8l.7-2.3L7 11.05V2h10v9.05l-4.5 2.65l.7 2.3H17l-3.1 2.2l1.2 3.8l-3.1-2.35zM12 11.65l1-.6V4h-2v7.05z");
}
</style><path class="a34b0acmk"/>`,
		"fallback": "material-symbols:military-tech-sharp",
	});
}

export default Component;
