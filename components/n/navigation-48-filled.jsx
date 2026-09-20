import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z2at4hbsu {
  fill: currentColor;
  d: path("M3.996 11.5a1.5 1.5 0 0 1 1.5-1.5h37a1.5 1.5 0 0 1 0 3h-37a1.5 1.5 0 0 1-1.5-1.5M4 24.5A1.5 1.5 0 0 1 5.5 23h37a1.5 1.5 0 0 1 0 3h-37A1.5 1.5 0 0 1 4 24.5M5.5 36a1.5 1.5 0 0 0 0 3h37a1.5 1.5 0 0 0 0-3z");
}
</style><path class="z2at4hbsu"/>`,
		"fallback": "fluent:navigation-48-filled",
	});
}

export default Component;
