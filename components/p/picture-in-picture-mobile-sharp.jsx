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
		"content": `<style>.vdp6gwbtk {
  fill: currentColor;
  d: path("M20 22H4V2h16zm-3-9V5h-6v8z");
}
</style><path class="vdp6gwbtk"/>`,
		"fallback": "material-symbols:picture-in-picture-mobile-sharp",
	});
}

export default Component;
