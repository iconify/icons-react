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
		"content": `<style>.j_nyaz5fz {
  fill: currentColor;
  d: path("M6 4.75A.75.75 0 0 1 6.75 4h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 6 4.75M6.75 9a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM3.03 7.72a.75.75 0 0 0-1.06 1.06l.97.97l-.97.97a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06z");
}
</style><path class="j_nyaz5fz"/>`,
		"fallback": "fluent:text-indent-increase-20-filled",
	});
}

export default Component;
