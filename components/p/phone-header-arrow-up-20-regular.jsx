import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h-p04lbnz {
  fill: currentColor;
  d: path("M7 4.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm5.354 5.146l-2-2l-.003-.002A.5.5 0 0 0 10.003 6h-.006a.5.5 0 0 0-.35.146l-2 2a.5.5 0 1 0 .707.708L9.5 7.707V10.5a.5.5 0 0 0 1 0V7.707l1.146 1.147a.5.5 0 0 0 .708-.708");
}
</style><path class="h-p04lbnz"/>`,
		"fallback": "fluent:phone-header-arrow-up-20-regular",
	});
}

export default Component;
