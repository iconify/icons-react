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
		"content": `<style>.b_rp06bgq {
  fill: currentColor;
  d: path("M4 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm1 3.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zM13 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm.5 3h2a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-.5.5H14V13h1.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .5-.5H15V7h-1.5a.5.5 0 0 1 0-1");
}
</style><path class="b_rp06bgq"/>`,
		"fallback": "fluent:number-row-20-filled",
	});
}

export default Component;
