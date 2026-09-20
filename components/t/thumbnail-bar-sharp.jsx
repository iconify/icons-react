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
		"content": `<style>.kh989uf3m {
  fill: currentColor;
  d: path("M3 19V5h5v14zm6 0V5h12v14z");
}
</style><path class="kh989uf3m"/>`,
		"fallback": "material-symbols-light:thumbnail-bar-sharp",
	});
}

export default Component;
