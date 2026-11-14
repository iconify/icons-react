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
		"content": `<style>.r0h01mbhj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19m-17 0v4.5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V13m3 0v4.5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V13M12 13V7a2.5 2.5 0 0 1 5 0v1.5");
}
</style><path class="r0h01mbhj"/>`,
		"fallback": "uix-sharp:kitchen-sink-double",
	});
}

export default Component;
