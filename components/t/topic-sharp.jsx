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
		"content": `<style>.z80bkzg0b {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v14zm4-4h8v-2H6zm0-4h12v-2H6z");
}
</style><path class="z80bkzg0b"/>`,
		"fallback": "material-symbols:topic-sharp",
	});
}

export default Component;
