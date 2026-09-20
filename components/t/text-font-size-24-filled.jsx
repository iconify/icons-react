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
		"content": `<style>.rjyfeo24f {
  fill: currentColor;
  d: path("M15.5 3a1 1 0 0 1 .939.655l5.5 15a1 1 0 0 1-1.878.69l-1.41-3.845H12.35l-1.41 3.845a1 1 0 0 1-1.87.017L8.343 17.5H4.656l-.724 1.862a1 1 0 1 1-1.864-.724l3.5-9l.066-.138a1 1 0 0 1 1.798.138l2.54 6.533l4.59-12.516l.064-.14A1 1 0 0 1 15.5 3M5.434 15.5h2.132L6.5 12.758zm7.647-2h4.838L15.5 6.903z");
}
</style><path class="rjyfeo24f"/>`,
		"fallback": "fluent:text-font-size-24-filled",
	});
}

export default Component;
