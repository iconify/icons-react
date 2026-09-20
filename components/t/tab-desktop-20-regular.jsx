import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a1qbtqbym {
  fill: currentColor;
  d: path("M2.997 5.5a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5h-9a2.5 2.5 0 0 1-2.5-2.5zm13 .5v-.5a1.5 1.5 0 0 0-1.5-1.5h-5.5v1.5a.5.5 0 0 0 .5.5zm-8-2h-2.5a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V7h-6.5a1.5 1.5 0 0 1-1.5-1.5z");
}
</style><path class="a1qbtqbym"/>`,
		"fallback": "fluent:tab-desktop-20-regular",
	});
}

export default Component;
