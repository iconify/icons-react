import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.im7h6exyd {
  fill: currentColor;
  d: path("M4 16.25A6.25 6.25 0 0 1 10.25 10h14.5A6.25 6.25 0 0 1 31 16.25v15.5A6.25 6.25 0 0 1 24.75 38h-14.5A6.25 6.25 0 0 1 4 31.75zm34.907 19.168L33 31.339v-14.68l5.907-4.078c2.156-1.488 5.097.055 5.097 2.675v17.487c0 2.62-2.941 4.163-5.097 2.675");
}
</style><path class="im7h6exyd"/>`,
		"fallback": "fluent:video-48-filled",
	});
}

export default Component;
