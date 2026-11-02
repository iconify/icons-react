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
		"content": `<style>.wugsonbuz {
  fill: currentColor;
  d: path("M9 5c.265 0 .52.105.707.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6A1 1 0 0 1 2 12V6a1 1 0 0 1 1-1Zm6.707.293l6 6a1 1 0 0 1 0 1.414l-6 6a.999.999 0 1 1-1.414-1.414L19.586 12l-5.293-5.293a.999.999 0 1 1 1.414-1.414M7 9a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="wugsonbuz"/>`,
		"fallback": "coolicons:tags-fill-sharp",
	});
}

export default Component;
