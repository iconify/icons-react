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
		"content": `<style>.fostj_qni {
  fill: currentColor;
  d: path("m8.293 5.293l3-3a1 1 0 0 1 1.414 0l3 3a.999.999 0 1 1-1.414 1.414L13 5.414v8.172l2-2V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-.936-.649l-1.889 1.888a3 3 0 1 1-2.35 0l-2.431-2.43a3 3 0 1 1 .573-2.256L11 13.586V5.414L9.707 6.707a.999.999 0 1 1-1.414-1.414");
}
</style><path class="fostj_qni"/>`,
		"fallback": "coolicons:usb-fill-sharp",
	});
}

export default Component;
