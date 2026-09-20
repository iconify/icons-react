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
		"content": `<style>.tvp1plywv {
  fill: currentColor;
  d: path("M4 20.77V3.23l1.27.962l1.346-.961l1.346.961l1.346-.961l1.346.961L12 3.231l1.346.961l1.346-.961l1.346.961l1.346-.961l1.347.961L20 3.231v17.538l-1.27-.961l-1.346.961l-1.346-.961l-1.346.961l-1.346-.961l-1.346.961l-1.346-.961l-1.346.961l-1.346-.961l-1.346.961l-1.347-.961zm2.5-4.885h11v-1h-11zm0-3.385h11v-1h-11zm0-3.384h11v-1h-11z");
}
</style><path class="tvp1plywv"/>`,
		"fallback": "material-symbols-light:receipt-sharp",
	});
}

export default Component;
