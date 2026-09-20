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
		"content": `<style>.m_j4it4yx {
  fill: currentColor;
  d: path("M4 20h12v-9H4zm14-5v-2h2V4H8v5H6V2h16v13zM2 22V9h16v13zm8-6.5");
}
</style><path class="m_j4it4yx"/>`,
		"fallback": "material-symbols:select-window-2-outline-sharp",
	});
}

export default Component;
