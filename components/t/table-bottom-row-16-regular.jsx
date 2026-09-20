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
		"content": `<style>.fojavfbda {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm5.5 9v2H6v-2zm-7 0h2v2h-.5A1.5 1.5 0 0 1 3 11.5zm0-1V4.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5V10zm8 3v-2h2v.5a1.5 1.5 0 0 1-1.5 1.5z");
}
</style><path class="fojavfbda"/>`,
		"fallback": "fluent:table-bottom-row-16-regular",
	});
}

export default Component;
