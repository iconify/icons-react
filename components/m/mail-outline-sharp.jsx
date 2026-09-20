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
		"content": `<style>.mpqbhosqj {
  fill: currentColor;
  d: path("M2 20V4h20v16zm10-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z");
}
</style><path class="mpqbhosqj"/>`,
		"fallback": "material-symbols:mail-outline-sharp",
	});
}

export default Component;
