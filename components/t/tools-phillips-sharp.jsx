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
		"content": `<style>.lt6antbal {
  fill: currentColor;
  d: path("M8 20v-1h8v1zm0-2V9.327L11.25 5h1.5L16 9.327V18zm1-5.288l2.5-2.5V6.327L9 9.675zm6 0V9.675l-2.5-3.348v3.885z");
}
</style><path class="lt6antbal"/>`,
		"fallback": "material-symbols-light:tools-phillips-sharp",
	});
}

export default Component;
