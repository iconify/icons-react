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
		"content": `<style>.dm4zz-mvm {
  fill: currentColor;
  d: path("M21.104 22.53L17.573 19H3V5h2l1 1H4.573L1.881 3.308l.713-.714l19.223 19.223zM21 18.19l-5.496-5.497H19V7h-7.692v1.496L7.812 5H21z");
}
</style><path class="dm4zz-mvm"/>`,
		"fallback": "material-symbols-light:picture-in-picture-off-sharp",
	});
}

export default Component;
