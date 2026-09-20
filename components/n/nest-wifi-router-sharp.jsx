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
		"content": `<style>.vajk4gc5p {
  fill: currentColor;
  d: path("M9 21q-1.925 0-3.463-1.1T3.35 17h17.3q-.65 1.8-2.187 2.9T15 21zm-6-6V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v6z");
}
</style><path class="vajk4gc5p"/>`,
		"fallback": "material-symbols:nest-wifi-router-sharp",
	});
}

export default Component;
