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
		"content": `<style>.brxcolvah {
  fill: currentColor;
  d: path("M2 17V7h20v10zm3-4h6v-2H5zm8 0h2v-2h-2zm3 0h2v-2h-2z");
}
</style><path class="brxcolvah"/>`,
		"fallback": "material-symbols:settop-component-sharp",
	});
}

export default Component;
