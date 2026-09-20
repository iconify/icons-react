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
		"content": `<style>.dzbiw1xsm {
  fill: currentColor;
  d: path("M2 17V7h20v10zm2-2h16V9H4zm1-2h6v-2H5zm8 0h2v-2h-2zm3 0h2v-2h-2zM4 15V9z");
}
</style><path class="dzbiw1xsm"/>`,
		"fallback": "material-symbols:settop-component-outline-sharp",
	});
}

export default Component;
