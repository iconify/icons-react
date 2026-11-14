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
		"content": `<style>.w1oss5tet {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M21.871 5.31q1.591-1.59 0-3.181t-3.181 0L17.629 3.19q-1.299 1.298-.477 2.597l-2.149 2.149q-.916-.565-2.325-.638q-3.444-.179-4.268 2.871q-2.116-.15-3.863 1.213q-2.043 1.594-2.202 4.181t1.674 4.418q1.832 1.833 4.418 1.674t4.181-2.202q1.363-1.747 1.213-3.863q3.05-.824 2.871-4.268q-.073-1.409-.638-2.325l2.149-2.149q1.298.822 2.597-.477zM5.5 16q0-2.5 2.5-2.5t2.5 2.5T8 18.5T5.5 16");
}
</style><path class="w1oss5tet"/>`,
		"fallback": "uix-solid:pin-music-shop",
	});
}

export default Component;
