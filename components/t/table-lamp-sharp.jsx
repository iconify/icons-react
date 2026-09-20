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
		"content": `<style>.ap48v56cb {
  fill: currentColor;
  d: path("M13 21v-2h8v2zm3-3V7h-5v4H2.475l3.5-8H11v2h7v13z");
}
</style><path class="ap48v56cb"/>`,
		"fallback": "material-symbols:table-lamp-sharp",
	});
}

export default Component;
