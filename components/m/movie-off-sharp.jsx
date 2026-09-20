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
		"content": `<style>.vqug93typ {
  fill: currentColor;
  d: path("M3 19V5h1.808l14 14zm18-.221L7.639 5h1.419l1.425 2.844l.156.156h2.919l-1.5-3h2.5l1.5 3h3l-1.5-3H21zm-1.09 2.75L2.47 4.09l.714-.714l17.438 17.439z");
}
</style><path class="vqug93typ"/>`,
		"fallback": "material-symbols-light:movie-off-sharp",
	});
}

export default Component;
