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
		"content": `<style>.d83_-ozzo {
  fill: currentColor;
  d: path("M18 16v-2h-2v-2h2v-2h2v2h2v2h-2v2zm-3 6q-3.175-1.2-5.087-3.95T8 11.9q0-2.275.9-4.312T11.45 4H8V2h7v7h-2V5.3q-1.425 1.275-2.212 2.988T10 11.9q0 2.55 1.35 4.688T15 19.825z");
}
</style><path class="d83_-ozzo"/>`,
		"fallback": "material-symbols:switch-access-shortcut-add",
	});
}

export default Component;
