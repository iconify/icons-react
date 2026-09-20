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
		"content": `<style>.w-43ddoew {
  fill: currentColor;
  d: path("M3 21L21 3v18zm2.421-1H20V5.427z");
}
</style><path class="w-43ddoew"/>`,
		"fallback": "material-symbols-light:signal-cellular-0-bar-outline-sharp",
	});
}

export default Component;
