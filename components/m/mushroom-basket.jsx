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
		"content": `<style>.jq5hcqbyu {
  d: path("M2.5 9.5h19l-2 11h-15Zm4.5 0l3-6m7 6l-3-6");
}

.ms_7rjb5n {
  d: path("M8.5 15.5a3.5 3.5 0 0 1 7 0Zm3.5 0v2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jq5hcqbyu"/><path class="ms_7rjb5n"/></g>`,
		"fallback": "uix-sharp:mushroom-basket",
	});
}

export default Component;
