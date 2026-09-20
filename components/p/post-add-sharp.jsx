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
		"content": `<style>.ud0wm_1vo {
  fill: currentColor;
  d: path("M8 10.5v-1h7v1zm0 3v-1h7v1zm0 3v-1h7v1zM17.5 8V6h-2V5h2V3h1v2h2v1h-2v2zm-14 12V4h10.923v1H4.5v14h14V9.077h1V20z");
}
</style><path class="ud0wm_1vo"/>`,
		"fallback": "material-symbols-light:post-add-sharp",
	});
}

export default Component;
