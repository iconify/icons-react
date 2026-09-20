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
		"content": `<style>.gp4ljwb8m {
  fill: currentColor;
  d: path("M3 17.5v-11h1v11zm12.712-.212l-.714-.688l4.1-4.1H6.385v-1h12.694l-4.056-4.1l.689-.688L21 12z");
}
</style><path class="gp4ljwb8m"/>`,
		"fallback": "material-symbols-light:start-outline-sharp",
	});
}

export default Component;
