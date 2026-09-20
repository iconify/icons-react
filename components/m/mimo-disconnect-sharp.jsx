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
		"content": `<style>.xmufstr6q {
  fill: currentColor;
  d: path("M20.5 23.3L15.2 18H17l1 1v2H6v-2l1-1H2V3.175h1.175v2.8L.7 3.5l1.4-1.4l19.8 19.8zm.2-5.45L5.85 3H22v14.85z");
}
</style><path class="xmufstr6q"/>`,
		"fallback": "material-symbols:mimo-disconnect-sharp",
	});
}

export default Component;
