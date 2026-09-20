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
		"content": `<style>.rlsmbdbms {
  fill: currentColor;
  d: path("M2 22V2h20v8h-2V4H4v13.125L5.15 16H15v2H6zm2-6V4zm15 7v-5h-2v-6h5l-1.7 4h2.2z");
}
</style><path class="rlsmbdbms"/>`,
		"fallback": "material-symbols:quickreply-outline-sharp",
	});
}

export default Component;
