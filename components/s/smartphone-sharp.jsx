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
		"content": `<style>.jwizc5bwk {
  fill: currentColor;
  d: path("M6 22V2h12v20zm1-3.5h10v-13H7z");
}
</style><path class="jwizc5bwk"/>`,
		"fallback": "material-symbols-light:smartphone-sharp",
	});
}

export default Component;
