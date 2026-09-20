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
		"content": `<style>.rh8l6xbpz {
  fill: currentColor;
  d: path("M11 18h2v-1h1q.425 0 .713-.288T15 16v-3q0-.425-.288-.712T14 12h-3v-1h4V9h-2V8h-2v1h-1q-.425 0-.712.288T9 10v3q0 .425.288.713T10 14h3v1H9v2h2zm-5 4q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm0-2h12V8.85L13.15 4H6zm0 0V4z");
}
</style><path class="rh8l6xbpz"/>`,
		"fallback": "material-symbols:request-page-outline",
	});
}

export default Component;
