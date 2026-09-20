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
		"content": `<style>.d80-vhbqh {
  fill: currentColor;
  d: path("M11.667 21.671L3 13.004L12.992 3h8.693v8.692zm6.46-14.113q.425 0 .722-.292t.297-.708q0-.425-.295-.722t-.716-.297t-.715.295t-.293.716t.292.715t.708.293");
}
</style><path class="d80-vhbqh"/>`,
		"fallback": "material-symbols-light:shoppingmode-sharp",
	});
}

export default Component;
