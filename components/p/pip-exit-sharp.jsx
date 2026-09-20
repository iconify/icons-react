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
		"content": `<style>.fumev6hpg {
  fill: currentColor;
  d: path("M2 20v-9h9V4h11v16zm15.075-3.5l1.425-1.425L15.4 12H18v-2h-6v6h2v-2.575zM2 9V4h7v5z");
}
</style><path class="fumev6hpg"/>`,
		"fallback": "material-symbols:pip-exit-sharp",
	});
}

export default Component;
