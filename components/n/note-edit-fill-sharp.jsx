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
		"content": `<style>.hjj3uvefr {
  fill: currentColor;
  d: path("M15.707 5.293L15 4.586l2.293-2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414L19.414 9ZM11 5H5v14h14v-6a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7a1 1 0 0 1 0 2M8 15v-3c0-.265.105-.52.293-.707L13.586 6L18 10.414l-5.293 5.293A1 1 0 0 1 12 16H9a1 1 0 0 1-1-1");
}
</style><path class="hjj3uvefr"/>`,
		"fallback": "coolicons:note-edit-fill-sharp",
	});
}

export default Component;
