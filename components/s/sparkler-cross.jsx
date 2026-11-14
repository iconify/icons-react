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
		"content": `<style>.wlzyiepcn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 21l9.5-13M19 21L9.5 8M12 5h.01M12 2.25v.5M8.75 4l.5.25m6-.25l-.5.25");
}
</style><path class="wlzyiepcn"/>`,
		"fallback": "uix-sharp:sparkler-cross",
	});
}

export default Component;
