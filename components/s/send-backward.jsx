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
		"content": `<style>.l1lcqjknf {
  d: path("M12.5 6.75V4.5a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.25m-2.25 3V21m-2-2l2 2l2-2");
}

.p-0rb3jql {
  d: path("M9.5 9.5h12v12h-12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p-0rb3jql"/><path class="l1lcqjknf"/></g>`,
		"fallback": "uix-sharp:send-backward",
	});
}

export default Component;
