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
		"content": `<style>.q_9-n3bwy {
  fill: currentColor;
  d: path("M9 18v-1h7.292L5 5.708L5.708 5L17 16.292V9h1v9z");
}
</style><path class="q_9-n3bwy"/>`,
		"fallback": "material-symbols-light:south-east",
	});
}

export default Component;
