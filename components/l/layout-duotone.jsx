import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ncg03rbnq {
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v40H40V56ZM40 112h56v88H40Zm176 88H112v-88h104z");
}

.s9fjjhdqu {
  d: path("M104 104v104H40a8 8 0 0 1-8-8v-96Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="s9fjjhdqu"/><path class="ncg03rbnq"/></g>`,
		"fallback": "ph:layout-duotone",
	});
}

export default Component;
