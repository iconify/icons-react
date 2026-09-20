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
		"content": `<style>.utpm5bcmk {
  fill: currentColor;
  d: path("M5 21V3h14v18zm2.73-3.5h8.693l-2.74-3.654l-2.53 3.192l-1.605-1.925zM12 10.116l2-1.193l2 1.193V4h-4z");
}
</style><path class="utpm5bcmk"/>`,
		"fallback": "material-symbols-light:photo-album-sharp",
	});
}

export default Component;
