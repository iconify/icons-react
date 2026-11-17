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
		"content": `<style>.rnqi44baz {
  fill: currentColor;
  d: path("M16.901 6H18a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1.099A5.01 5.01 0 0 1 12 18h-1a5 5 0 0 1-5-5V7c0-.468-.395-.98-.707-1.293l-1-1a1.36 1.36 0 0 1-.382-1.186C4.072 2.572 5.102 2 6 2h6a5.01 5.01 0 0 1 4.901 4M17 12h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1Zm1 8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z");
}
</style><path class="rnqi44baz"/>`,
		"fallback": "coolicons:kettle-fill-round",
	});
}

export default Component;
