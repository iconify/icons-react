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
		"content": `<style>.iszng7lai {
  fill: currentColor;
  d: path("M15 22q-3.175-1.2-5.087-3.95T8 11.9q0-2.275.9-4.312T11.45 4H8V2h7v7h-2V5.3q-1.425 1.275-2.212 2.988T10 11.9q0 2.55 1.35 4.688T15 19.825z");
}
</style><path class="iszng7lai"/>`,
		"fallback": "material-symbols:switch-access-shortcut",
	});
}

export default Component;
