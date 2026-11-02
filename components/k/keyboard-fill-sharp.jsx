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
		"content": `<style>.zezs4vbef {
  fill: currentColor;
  d: path("M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm4 3a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm3 0a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm3.01 0H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M15 8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm3.01 0H18a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M6 11a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm3.01 0H9a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M12 11a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm3.01 0H15a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M18 11a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm-2 3H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2");
}
</style><path class="zezs4vbef"/>`,
		"fallback": "coolicons:keyboard-fill-sharp",
	});
}

export default Component;
