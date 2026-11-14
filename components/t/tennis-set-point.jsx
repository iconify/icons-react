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
		"content": `<style>.c2hqtqrfm {
  d: path("m2.5 11.5l2.5-6l2.25 6l2.5-6l2.5 6");
}

.ex_wp-xyk {
  d: path("M2.5 5.5v13m9.75-13v13M2.5 5.5h9.75v6H2.5ZM15 15.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ex_wp-xyk"/><path class="c2hqtqrfm"/></g>`,
		"fallback": "uix-sharp:tennis-set-point",
	});
}

export default Component;
