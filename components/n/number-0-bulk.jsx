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
		"content": `<style>.dai24z1ii {
  fill: currentColor;
  d: path("M9 7v10a3 3 0 1 0 6 0V7a3 3 0 1 0-6 0M7 17V7a5 5 0 0 1 10 0v10a5 5 0 0 1-10 0");
}
</style><path class="dai24z1ii"/>`,
		"fallback": "coolicons:number-0-bulk",
	});
}

export default Component;
