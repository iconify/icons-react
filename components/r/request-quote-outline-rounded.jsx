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
		"content": `<style>.q-ylx-5_x {
  fill: currentColor;
  d: path("M11 18v.5q0 .2.15.35t.35.15h1q.2 0 .35-.15t.15-.35V18h1q.425 0 .713-.288T15 17v-3q0-.425-.288-.712T14 13h-3v-1h3q.425 0 .713-.288T15 11t-.288-.712T14 10h-1v-.5q0-.2-.15-.35T12.5 9h-1q-.2 0-.35.15T11 9.5v.5h-1q-.425 0-.712.288T9 11v3q0 .425.288.713T10 15h3v1h-3q-.425 0-.712.288T9 17t.288.713T10 18zm-5 4q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h9l5 5v13q0 .825-.587 1.413T18 22zm0-2h12V8h-3q-.425 0-.712-.288T14 7V4H6zM6 4v4zv16z");
}
</style><path class="q-ylx-5_x"/>`,
		"fallback": "material-symbols:request-quote-outline-rounded",
	});
}

export default Component;
