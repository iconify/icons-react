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
		"content": `<style>.bdn7b7brg {
  fill: currentColor;
  d: path("M14 17H7a1 1 0 0 1-.832-1.555l8-12A1 1 0 0 1 16 4v11h1a1 1 0 0 1 0 2h-1v3a1 1 0 0 1-2 0Zm0-2V7.303L8.869 15Z");
}
</style><path class="bdn7b7brg"/>`,
		"fallback": "coolicons:number-4-bulk-sharp",
	});
}

export default Component;
