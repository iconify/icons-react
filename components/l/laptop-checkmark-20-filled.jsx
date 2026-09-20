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
		"content": `<style>.gszjvob3j {
  fill: currentColor;
  d: path("M14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m2.354 2.646a.5.5 0 0 0-.707 0L13.5 15.294l-.646-.646a.5.5 0 1 0-.707.707l1 1a.5.5 0 0 0 .707 0l3-3a.5.5 0 0 0 0-.707M9.024 15q.046.517.184 1H2.5a.5.5 0 0 1 0-1zM15 5a2 2 0 0 1 2 2v2.6A5.5 5.5 0 0 0 9.023 14H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z");
}
</style><path class="gszjvob3j"/>`,
		"fallback": "fluent:laptop-checkmark-20-filled",
	});
}

export default Component;
