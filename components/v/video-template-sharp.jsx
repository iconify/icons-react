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
		"content": `<style>.q_13vzbri {
  fill: currentColor;
  d: path("M3.942 22v-2.366h16.116V22zM3 17.25V6.75h18v10.5zm7.327-2.634L14.673 12l-4.346-2.615zM3.942 4.366V2h16.116v2.366z");
}
</style><path class="q_13vzbri"/>`,
		"fallback": "material-symbols-light:video-template-sharp",
	});
}

export default Component;
