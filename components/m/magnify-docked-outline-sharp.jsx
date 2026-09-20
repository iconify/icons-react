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
		"content": `<style>.fq7c6zbvn {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-3v1h16v-1zm0-2h16V6H4zm10-1.5h2v-2h2v-2h-2v-2h-2v2h-2v2h2zM4 17v1z");
}
</style><path class="fq7c6zbvn"/>`,
		"fallback": "material-symbols:magnify-docked-outline-sharp",
	});
}

export default Component;
