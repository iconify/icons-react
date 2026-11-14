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
		"content": `<style>.mex4oubwi {
  d: path("M4.5 11V7A2.5 2.5 0 0 1 7 4.5h10A2.5 2.5 0 0 1 19.5 7v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ye9jnqbpm {
  d: path("M2.5 13a2 2 0 0 1 4 0v2h11v-2a2 2 0 0 1 4 0v5.5h-19ZM5 18.5v2m14-2v2");
}
</style><g class="ulnmmdpxh"><path class="mex4oubwi"/><path class="ye9jnqbpm"/></g>`,
		"fallback": "uix-sharp:pin-furniture",
	});
}

export default Component;
