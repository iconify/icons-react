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
		"content": `<style>.tl-kidj4s {
  fill: currentColor;
  d: path("M224 160V96a8 8 0 0 0-8-8h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8zm-60.69 48l-40-40h33.38l40 40Zm4.69-51.31v-33.38l40 40v33.38Zm40-16L171.31 104H208ZM48 48h104v104H48Zm56 123.31L140.69 208H104Z");
}
</style><path class="tl-kidj4s"/>`,
		"fallback": "ph:subtract-square",
	});
}

export default Component;
