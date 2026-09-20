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
		"content": `<style>.dkl080bfi {
  fill: currentColor;
  d: path("M1 19V5h22v14zm5-2h12V7H6z");
}
</style><path class="dkl080bfi"/>`,
		"fallback": "material-symbols:stay-current-landscape-sharp",
	});
}

export default Component;
