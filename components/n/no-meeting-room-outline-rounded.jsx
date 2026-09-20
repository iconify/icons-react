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
		"content": `<style>.ccb7q_cnc {
  fill: currentColor;
  d: path("m19 16.15l-2-2V6h-2v6.15l-2-2V5H7.85l-2-2H14q.4 0 .563.363T15 4h3q.425 0 .713.288T19 5zm.1 5.75L15 17.8V20q0 .425-.288.713T14 21H4q-.425 0-.712-.288T3 20t.288-.712T4 19h1V7.8L2.1 4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275M7 19h6v-3.2l-6-6zm3-6.2");
}
</style><path class="ccb7q_cnc"/>`,
		"fallback": "material-symbols:no-meeting-room-outline-rounded",
	});
}

export default Component;
