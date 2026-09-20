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
		"content": `<style>.i7liyjbeg {
  fill: currentColor;
  d: path("m20.462 21.492l-3.8-3.8h-.623l.769.77V20H7.192v-1.538l.77-.77H3V4.041h1.425l-.192 1.223l-2.456-2.456l.708-.708l18.684 18.685zm-.012-4.257L7.158 4H21v13.235z");
}
</style><path class="i7liyjbeg"/>`,
		"fallback": "material-symbols-light:mimo-disconnect-sharp",
	});
}

export default Component;
