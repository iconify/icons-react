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
		"content": `<style>.uftlalbra {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm4.1-2H20V7.025L17 8l-2.4-.775q-.3-.1-.6-.012t-.5.362L12 9.625l-2.4.775q-.325.1-.5.363t-.175.587v2.525L7.45 15.9q-.2.275-.2.588t.2.587z");
}
</style><path class="uftlalbra"/>`,
		"fallback": "material-symbols:manga-rounded",
	});
}

export default Component;
