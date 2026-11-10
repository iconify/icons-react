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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.k7k39fb1f {
  d: path("M9.995 1L12.777 3.61C12.857 3.73 12.988 4.1 13.005 4.25C12.983 4.46 12.832 4.81 12.704 4.96L9.967 7.52L8.6 6.07L9.249 5.46L9.471 5.25H5V10H3V4.25C3 3.7 3.448 3.25 4 3.25H9.472L9.25 3.04L8.627 2.46L9.995 1Z");
}

.wt1i9vbjs {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 10C20.552 10 21 10.45 21 11V22C21 22.55 20.552 23 20 23H9C8.448 23 8 22.55 8 22V11C8 10.45 8.448 10 9 10H20Z");
}
</style><g class="cuyn6tgcc"><path class="wt1i9vbjs"/><path class="k7k39fb1f"/></g>`,
		"fallback": "keyline-icons:rotate-cw-square-sharp-duotone",
	});
}

export default Component;
