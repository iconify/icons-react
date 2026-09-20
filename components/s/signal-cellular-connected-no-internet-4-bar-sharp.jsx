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
		"content": `<style>.klinfuimz {
  fill: currentColor;
  d: path("M2 22L22 2v6h-4v14zm18-4v-8h2v8zm0 4v-2h2v2z");
}
</style><path class="klinfuimz"/>`,
		"fallback": "material-symbols:signal-cellular-connected-no-internet-4-bar-sharp",
	});
}

export default Component;
