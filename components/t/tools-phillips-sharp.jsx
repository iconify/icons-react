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
		"content": `<style>.oywtd5bjt {
  fill: currentColor;
  d: path("M7 21v-2h10v2zm0-3V8l3.75-5h2.5L17 8v10zm2-7l2-2V6L9 8.675zm6 0V8.675L13 6v3z");
}
</style><path class="oywtd5bjt"/>`,
		"fallback": "material-symbols:tools-phillips-sharp",
	});
}

export default Component;
