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
		"content": `<style>.sbgj34bnx {
  fill: currentColor;
  d: path("M7 22V6.975h15V17l-5 5zm2-2h7v-4h4V9H9zm-4.7-.925L1.675 4.3L16.45 1.675L17.05 5H15l-.175-1L4 5.925l1 5.65v7.375zM14.5 14.5");
}
</style><path class="sbgj34bnx"/>`,
		"fallback": "material-symbols:note-stack-outline-sharp",
	});
}

export default Component;
