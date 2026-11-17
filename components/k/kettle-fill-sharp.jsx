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
		"content": `<style>.xh82x9bqw {
  fill: currentColor;
  d: path("M4 2h12a1 1 0 0 1 1 1v3h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6.414L3.293 3.707A1 1 0 0 1 4 2m13 10h2V8h-2Zm1 8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z");
}
</style><path class="xh82x9bqw"/>`,
		"fallback": "coolicons:kettle-fill-sharp",
	});
}

export default Component;
