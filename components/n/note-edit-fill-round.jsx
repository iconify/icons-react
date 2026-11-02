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
		"content": `<style>.ubfh4dbuz {
  fill: currentColor;
  d: path("M15.707 5.293L15 4.586l2.293-2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414L19.414 9ZM11 5H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3a1 1 0 0 1 2 0v3a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 21H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h3a1 1 0 0 1 0 2M8 15v-3c0-.265.105-.52.293-.707L13.586 6L18 10.414l-5.293 5.293A1 1 0 0 1 12 16H9a1 1 0 0 1-1-1");
}
</style><path class="ubfh4dbuz"/>`,
		"fallback": "coolicons:note-edit-fill-round",
	});
}

export default Component;
