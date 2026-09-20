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
		"content": `<style>.hc91lmb8b {
  fill: currentColor;
  d: path("m12 21l-6.346-6.346l.688-.688l5.158 5.151V2.981h1v16.117l5.158-5.157l.688.713z");
}
</style><path class="hc91lmb8b"/>`,
		"fallback": "material-symbols-light:south-sharp",
	});
}

export default Component;
