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
		"content": `<style>.k29z59bmu {
  fill: currentColor;
  d: path("M3 19v-1.77h1V18h.77v1zm0-3.77v-2h1v2zm0-4v-2h1v2zm0-4V5h3v1H4v1.23zM6.77 19v-1h2v1zM8 6V5h2v1zm2.77 13v-1h2v1zM12 10V5h9v5zm2.77 9v-1h2v1zm4 0v-1H20v-2h1v3zM20 14v-2h1v2z");
}
</style><path class="k29z59bmu"/>`,
		"fallback": "material-symbols-light:tab-unselected-sharp",
	});
}

export default Component;
