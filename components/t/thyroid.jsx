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
		"content": `<style>.v48i64ozn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 11.5c-1.5-1.5-2.5-5-4.5-5.75S4 7.5 4 11c0 4 1.5 6.75 3.75 6.75C9.5 17.75 10.5 16 12 15.5c1.5.5 2.5 2.25 4.25 2.25C18.5 17.75 20 15 20 11c0-3.5-1.5-6-3.5-5.25S13.5 10 12 11.5Zm-2-9v4.75m4-4.75v4.75m-4-2.5h4M10 19v2.5m4-2.5v2.5m-4-1.25h4");
}
</style><path class="v48i64ozn"/>`,
		"fallback": "uix-sharp:thyroid",
	});
}

export default Component;
