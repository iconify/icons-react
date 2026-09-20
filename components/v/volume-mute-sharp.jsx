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
		"content": `<style>.x2-dmab_d {
  fill: currentColor;
  d: path("M8 14v-4h3.423L15 6.423v11.154L11.423 14z");
}
</style><path class="x2-dmab_d"/>`,
		"fallback": "material-symbols-light:volume-mute-sharp",
	});
}

export default Component;
