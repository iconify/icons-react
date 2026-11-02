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
		"content": `<style>.qzzgfab5c {
  fill: currentColor;
  d: path("m2.707 2.293l19 19a.999.999 0 1 1-1.414 1.414l-4.357-4.356A1 1 0 0 1 15 19H3a1 1 0 0 1-1-1V6a1 1 0 0 1 .649-.936L1.293 3.707a.999.999 0 1 1 1.414-1.414m18.511 15.683L8.243 5H15a1 1 0 0 1 1 1v2.382l4.553-2.276A1 1 0 0 1 22 7v10a1 1 0 0 1-.782.976");
}
</style><path class="qzzgfab5c"/>`,
		"fallback": "coolicons:video-off-fill-sharp",
	});
}

export default Component;
