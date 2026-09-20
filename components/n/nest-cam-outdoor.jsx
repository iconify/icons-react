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
		"content": `<style>.w-tg8hb3l {
  fill: currentColor;
  d: path("M14.4 19.275q-.55.65-1.362.738t-1.463-.463L7.35 16.025q-.65-.525-1.125-1.2t-.775-1.45q-.275.3-.65.463T4 14H2V6h2q.725 0 1.288.45t.687 1.175q.95-1.45 2.45-2.287T11.65 4.5q1.125 0 2.138.4t1.862 1.125L19.9 9.55q.65.525.713 1.338t-.463 1.462z");
}
</style><path class="w-tg8hb3l"/>`,
		"fallback": "material-symbols:nest-cam-outdoor",
	});
}

export default Component;
