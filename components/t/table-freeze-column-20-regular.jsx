import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c81sgrwqb {
  fill: currentColor;
  d: path("M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3zM8 16h4v-3H8zm5 0h1.5a1.5 1.5 0 0 0 1.493-1.355L16 14.5V13h-3zm-1-4V8H8v4zm4-4h-3v4h3zm-4-1V4H8v3zm2.5-3H13v3h3V5.5a1.5 1.5 0 0 0-1.355-1.493zm-9 12H7V4H5.5a1.5 1.5 0 0 0-1.493 1.356L4 5.5v9a1.5 1.5 0 0 0 1.356 1.493z");
}
</style><path class="c81sgrwqb"/>`,
		"fallback": "fluent:table-freeze-column-20-regular",
	});
}

export default Component;
