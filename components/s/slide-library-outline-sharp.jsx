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
		"content": `<style>.fjyh5ybwb {
  fill: currentColor;
  d: path("M3 19V7.385h1V18h14v1zm3-3V5h8.554l-1 1H7v9h13V8.446l1-1V16zm6.98-4.327q-.382 0-.717-.147q-.336-.147-.57-.449q.309 0 .568-.153t.258-.443q0-.375.265-.63q.264-.255.639-.255q.356 0 .62.264q.265.265.265.62q0 .518-.395.855t-.932.338m2.371-1.98l-1.063-1.064l4.661-4.637l1.058 1.058z");
}
</style><path class="fjyh5ybwb"/>`,
		"fallback": "material-symbols-light:slide-library-outline-sharp",
	});
}

export default Component;
