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
		"content": `<style>.sebyljbld {
  fill: currentColor;
  d: path("M1 20V4h22v16zm5-2h12V6H6z");
}
</style><path class="sebyljbld"/>`,
		"fallback": "material-symbols:tablet-sharp",
	});
}

export default Component;
