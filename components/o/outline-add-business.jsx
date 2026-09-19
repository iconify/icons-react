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
		"content": `<style>.ryabz87it {
  fill: currentColor;
  d: path("M23 18h-3v-3h-2v3h-3v2h3v3h2v-3h3z");
}

.xh15btbto {
  fill: currentColor;
  d: path("M2 4h15v2H2zm13 13h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4zm-6 1H4v-4h5zm-5.96-6l.6-3h11.72l.6 3z");
}
</style><path class="xh15btbto"/><path class="ryabz87it"/>`,
		"fallback": "ic:outline-add-business",
	});
}

export default Component;
