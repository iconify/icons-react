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
		"content": `<style>.ukxma7bpe {
  fill: currentColor;
  d: path("M2 20V4h20v8.275l-3-1.5l-6 3v3.775q0 .65.1 1.263T13.4 20zm17 3q-1.725-.425-2.863-1.987T15 17.55V15l4-2l4 2v2.55q0 1.9-1.137 3.463T19 23m0-2.1q.875-.425 1.438-1.35t.562-2v-1.3l-2-1zM12 13l8-5V6l-8 5l-8-5v2z");
}
</style><path class="ukxma7bpe"/>`,
		"fallback": "material-symbols:mail-shield-sharp",
	});
}

export default Component;
