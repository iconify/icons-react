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
		"content": `<style>.vlg74197p {
  fill: currentColor;
  d: path("M9.03 2.22a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l1.5-1.5a.75.75 0 0 0-1.06-1.06l-.97.97zM6.25 7.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0zm9 0a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0zm-6 9.5v-9.5a.75.75 0 0 1 1.5 0v9.5a.75.75 0 0 1-1.5 0");
}
</style><path class="vlg74197p"/>`,
		"fallback": "fluent:text-indent-increase-ltr-90-20-filled",
	});
}

export default Component;
