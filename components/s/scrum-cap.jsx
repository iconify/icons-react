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
		"content": `<style>.t678k01mj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 17.5V12a8 8 0 0 1 16 0v5.5h-4V14a4 4 0 0 0-8 0v3.5Zm2 0q6 6 12 0M12 4v3.25");
}
</style><path class="t678k01mj"/>`,
		"fallback": "uix-sharp:scrum-cap",
	});
}

export default Component;
