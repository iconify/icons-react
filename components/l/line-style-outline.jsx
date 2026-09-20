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
		"content": `<style>.iduv_-qnu {
  fill: currentColor;
  d: path("M3 20v-2h2v2zm0-4v-2h5v2zm0-4v-2h8v2zm0-4V4h18v4zm4 12v-2h2v2zm2.5-4v-2h5v2zm1.5 4v-2h2v2zm2-8v-2h8v2zm2 8v-2h2v2zm1-4v-2h5v2zm3 4v-2h2v2z");
}
</style><path class="iduv_-qnu"/>`,
		"fallback": "material-symbols:line-style-outline",
	});
}

export default Component;
