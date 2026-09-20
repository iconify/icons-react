import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.goz7ws4mr {
  fill: currentColor;
  d: path("M2.5 1a.5.5 0 0 0-.5.5V9a2 2 0 0 0 2 2h1v2a2 2 0 0 0 2.245 1.985a5.5 5.5 0 0 1-.7-1.094A1 1 0 0 1 6 13v-2.5a.5.5 0 0 0-.5-.5H4a1 1 0 0 1-1-1V8h4.257a5.5 5.5 0 0 1 1.08-1H3V2h4v1.5a.5.5 0 0 0 1 0V2h1v2.5a.5.5 0 0 0 1 0V2h1v4.022a5.6 5.6 0 0 1 1 0V1.5a.5.5 0 0 0-.5-.5zm9 15a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9M9 11.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5");
}
</style><path class="goz7ws4mr"/>`,
		"fallback": "fluent:paint-brush-subtract-16-regular",
	});
}

export default Component;
