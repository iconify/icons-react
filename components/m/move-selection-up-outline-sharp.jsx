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
		"content": `<style>.wd7-_jags {
  fill: currentColor;
  d: path("M6 14V2h12v12zm2-2h8V4H8zm8 6v-2h2v2zM6 18v-2h2v2zm10 4v-2h2v2zm-5 0v-2h2v2zm-5 0v-2h2v2zm6-14");
}
</style><path class="wd7-_jags"/>`,
		"fallback": "material-symbols:move-selection-up-outline-sharp",
	});
}

export default Component;
