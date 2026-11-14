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
		"content": `<style>.fkisyn0qh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h4v4h11v-4h4v15h-19Zm4 4v11m11-11v11M12 8.5v11M2.5 14h19");
}
</style><path class="fkisyn0qh"/>`,
		"fallback": "uix-sharp:periodic-table",
	});
}

export default Component;
