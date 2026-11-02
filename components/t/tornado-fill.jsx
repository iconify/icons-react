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
		"content": `<style>.mzkuasbkk {
  fill: currentColor;
  d: path("M3 3h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m3 4h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m3 4h10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m1 4h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2m1 4a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Z");
}
</style><path class="mzkuasbkk"/>`,
		"fallback": "coolicons:tornado-fill",
	});
}

export default Component;
