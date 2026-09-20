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
		"content": `<style>.y3duoyxrk {
  fill: currentColor;
  d: path("M10 18q-.425 0-.712-.288T9 17t.288-.712T10 16h10q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T9 12t.288-.712T10 11h10q.425 0 .713.288T21 12t-.288.713T20 13zM4 8q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z");
}
</style><path class="y3duoyxrk"/>`,
		"fallback": "material-symbols:segment-outline-rounded",
	});
}

export default Component;
