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
		"content": `<style>.htuzd5bzy {
  fill: currentColor;
  d: path("M3 20V6h4.573l1.85-2h5.154l1.85 2H21v14zm4.5-3.384h9.154l-2.827-3.77l-2.615 3.308l-1.75-2.115z");
}
</style><path class="htuzd5bzy"/>`,
		"fallback": "material-symbols-light:photo-camera-back-sharp",
	});
}

export default Component;
