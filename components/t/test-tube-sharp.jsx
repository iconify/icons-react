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
		"content": `<style>.mu53uccft {
  d: path("m9.48 10.28l5.31-5.31l4.24 4.24l-5.31 5.31Zm4.24-6.37l6.37 6.37");
}

.v9i8vqbvt {
  d: path("m9.48 10.28l-4.24 4.24a3 3 0 0 0 4.24 4.24l4.24-4.24Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="v9i8vqbvt"/><path class="mu53uccft"/></g>`,
		"fallback": "iconoven:test-tube-sharp",
	});
}

export default Component;
