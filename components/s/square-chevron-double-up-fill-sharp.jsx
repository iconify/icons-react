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
		"content": `<style>.rqqt0fbow {
  fill: currentColor;
  d: path("M2 21V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m12.293-10.293a.999.999 0 1 0 1.414-1.414l-3-3a.997.997 0 0 0-1.414 0l-3 3a.999.999 0 1 0 1.414 1.414L12 8.414Zm0 6a.999.999 0 1 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3a.999.999 0 1 0 1.414 1.414L12 14.414Z");
}
</style><path class="rqqt0fbow"/>`,
		"fallback": "coolicons:square-chevron-double-up-fill-sharp",
	});
}

export default Component;
