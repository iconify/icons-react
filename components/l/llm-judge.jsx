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
		"content": `<style>.zdre12d0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.5v17m-3.5 0h7m-10-14h13M2.5 12l3-5.5l3 5.5a3 3 0 0 1-6 0Zm13 0l3-5.5l3 5.5m-6 0h6v3.5A1.5 1.5 0 0 1 20 17h-2.25l-2.25 1.5Z");
}
</style><path class="zdre12d0f"/>`,
		"fallback": "uix-sharp:llm-judge",
	});
}

export default Component;
