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
		"content": `<style>.jwbsu2b6i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v5.6m0 7.8v5.6m8.227-14.25l-5.716 3.3m-5.023 2.9l-5.715 3.3M9.75 4.25L12 6.5l2.25-2.25m-4.5 15.5L12 17.5l2.25 2.25m3.337-13.574l-.824 3.074l3.074.824M4.163 13.926l3.074.824l-.824 3.074m13.424-3.898l-1.545.414M5.675 9.669l-1.512.405M3.5 3.5l17 17");
}
</style><path class="jwbsu2b6i"/>`,
		"fallback": "uix-sharp:snowflake-off",
	});
}

export default Component;
