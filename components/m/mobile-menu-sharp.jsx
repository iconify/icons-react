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
		"content": `<style>.i9wnpubpr {
  fill: currentColor;
  d: path("M8 23q-.425 0-.712-.288T7 22t.288-.712T8 21t.713.288T9 22t-.288.713T8 23m3.288-.288Q11 22.426 11 22t.288-.712T12 21t.713.288T13 22t-.288.713T12 23t-.712-.288m4 0Q15 22.426 15 22t.288-.712T16 21t.713.288T17 22t-.288.713T16 23t-.712-.288m-2.576-17Q13 5.425 13 5t-.288-.712T12 4t-.712.288T11 5t.288.713T12 6t.713-.288M6 19V1h12v4.05h1v3.9h-1V19z");
}
</style><path class="i9wnpubpr"/>`,
		"fallback": "material-symbols:mobile-menu-sharp",
	});
}

export default Component;
