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
		"content": `<style>.ntt3ssblb {
  fill: currentColor;
  d: path("m4.2 5l-.7 1.9L17.6 12H3v8h18v-8.86zM7 17H5v-2h2zm12 0H9v-2h10z");
}
</style><path class="ntt3ssblb"/>`,
		"fallback": "ic:sharp-scanner",
	});
}

export default Component;
