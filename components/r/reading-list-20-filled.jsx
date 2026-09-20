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
		"content": `<style>.bu84bgb7k {
  fill: currentColor;
  d: path("M3.5 5.497a1.002 1.002 0 0 1 1.837-.555a.75.75 0 0 0 1.248-.832A2.502 2.502 0 1 0 4.597 8h10.677a.75.75 0 0 0 0-1.5H4.597l-.048.001l-.047-.001A1 1 0 0 1 3.5 5.497M9.748 4a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM5.75 9a.75.75 0 0 0 0 1.5h11.5a.75.75 0 1 0 0-1.5zM2 12.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75M5.75 14a.75.75 0 0 0 0 1.5h11.498a.75.75 0 1 0 0-1.5z");
}
</style><path class="bu84bgb7k"/>`,
		"fallback": "fluent:reading-list-20-filled",
	});
}

export default Component;
