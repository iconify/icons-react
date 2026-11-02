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
		"content": `<style>.afz3-nqqw {
  fill: currentColor;
  d: path("m15.316 3.051l6 2A1 1 0 0 1 22 6v5a1 1 0 0 1-1 1h-2v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8H3a1 1 0 0 1-1-1V6a1 1 0 0 1 .684-.949l6-2A1.002 1.002 0 0 1 10 4a2 2 0 1 0 4 0a1 1 0 0 1 1.316-.949");
}
</style><path class="afz3-nqqw"/>`,
		"fallback": "coolicons:shirt-fill-sharp",
	});
}

export default Component;
