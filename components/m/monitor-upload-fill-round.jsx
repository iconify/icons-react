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
		"content": `<style>.spb3ambda {
  fill: currentColor;
  d: path("M8 3h8a5 5 0 0 1 5 5v5a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5m3.293 3.293l-3 3a.999.999 0 1 0 1.414 1.414L11 9.414V14a1 1 0 0 0 2 0V9.414l1.293 1.293a.999.999 0 1 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0M9 19h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><path class="spb3ambda"/>`,
		"fallback": "coolicons:monitor-upload-fill-round",
	});
}

export default Component;
