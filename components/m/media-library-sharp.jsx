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
		"content": `<style>.aho8uyzng {
  d: path("M4.25 3.75v16.5m4-16.5v16.5m3-13h10v13h-10z");
}

.dokn69jlv {
  d: path("m15.33 11.64l2.59 1.72l.58.39l-.58.39l-2.59 1.72l-.58.39v-5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="aho8uyzng"/><path class="dokn69jlv"/></g>`,
		"fallback": "iconoven:media-library-sharp",
	});
}

export default Component;
