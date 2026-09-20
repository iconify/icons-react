import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cv_dshb1h {
  fill: currentColor;
  d: path("M12.5 3A2.5 2.5 0 0 1 15 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5v-5A2.5 2.5 0 0 1 3.5 3zM6.974 5.803a.5.5 0 0 0-.671.223L5 8.632L3.697 6.026a.5.5 0 0 0-.894.448l1.75 3.5a.5.5 0 0 0 .894 0l1.75-3.5a.5.5 0 0 0-.223-.671M8.5 5.75a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 1 0v-3.5a.5.5 0 0 0-.5-.5m2 0a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 1 0V9h.625a1.625 1.625 0 1 0 0-3.25zm1.125 1a.625.625 0 1 1 0 1.25H11V6.75z");
}
</style><path class="cv_dshb1h"/>`,
		"fallback": "fluent:vip-16-filled",
	});
}

export default Component;
