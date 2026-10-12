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
		"content": `<style>.p90627a9z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 13.25h17l-.28 1.47l-.94 5.06l-.28 1.47H4.25l-.28-1.47l-.94-5.06l-.28-1.47zm3.75 4h8M12 11V3M8.75 6.25L12 3l3.25 3.25");
}
</style><path class="p90627a9z"/>`,
		"fallback": "iconoven:out-tray-sharp",
	});
}

export default Component;
