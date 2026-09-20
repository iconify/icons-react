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
		"content": `<style>.ocemagb_f {
  fill: currentColor;
  d: path("M6 18V6h12v12z");
}
</style><path class="ocemagb_f"/>`,
		"fallback": "material-symbols:stop-sharp",
	});
}

export default Component;
