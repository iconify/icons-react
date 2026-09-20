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
		"content": `<style>.num-5bb5o {
  fill: currentColor;
  d: path("M5 18.23V17h8v1zm0-3.788v-1h14v1zm0-3.884v-1h14v1zM5 7V5.77h14V7z");
}
</style><path class="num-5bb5o"/>`,
		"fallback": "material-symbols-light:subject-outline",
	});
}

export default Component;
