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
		"content": `<style>.fuc1zccju {
  fill: currentColor;
  d: path("M7.5 7v2h-2V7zm0 5v-2h-2v2zm3-5v2h-2V7zm0 5v-2h-2v2zM5 5V3.5A1.5 1.5 0 0 1 6.5 2h3A1.5 1.5 0 0 1 11 3.5V5h2.5a.5.5 0 0 1 .5.5V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5.5a.5.5 0 0 1 .5-.5zm1-1.5V5h4V3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M3 12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6H3z");
}
</style><path class="fuc1zccju"/>`,
		"fallback": "fluent:store-microsoft-16-regular",
	});
}

export default Component;
