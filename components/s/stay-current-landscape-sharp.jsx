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
		"content": `<style>.ivomhabac {
  fill: currentColor;
  d: path("M2 18V6h20v12zm3.5-1h13V7h-13z");
}
</style><path class="ivomhabac"/>`,
		"fallback": "material-symbols-light:stay-current-landscape-sharp",
	});
}

export default Component;
