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
		"content": `<style>.pya37j6aq {
  fill: currentColor;
  d: path("M12.293 3.293A1 1 0 0 1 14 4v16a1 1 0 0 1-2 0V6.414L8.707 9.707a.999.999 0 1 1-1.414-1.414Z");
}
</style><path class="pya37j6aq"/>`,
		"fallback": "coolicons:number-1-fill-sharp",
	});
}

export default Component;
