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
		"content": `<style>.dfsdr6-sj {
  fill: currentColor;
  d: path("M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm-4 4q-.825 0-1.412-.587T3 20V6h2v14h11v2zm5.25-9h1.5V8.5h1v3h1.5v-3h1V13h1.5V8q0-.425-.288-.712T15.75 7h-4.5q-.425 0-.712.288T10.25 8z");
}
</style><path class="dfsdr6-sj"/>`,
		"fallback": "material-symbols:markdown-copy",
	});
}

export default Component;
