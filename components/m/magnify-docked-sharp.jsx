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
		"content": `<style>.f5bovl8ga {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-5h16V6H4zm10-1.5h2v-2h2v-2h-2v-2h-2v2h-2v2h2z");
}
</style><path class="f5bovl8ga"/>`,
		"fallback": "material-symbols:magnify-docked-sharp",
	});
}

export default Component;
