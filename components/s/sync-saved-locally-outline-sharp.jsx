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
		"content": `<style>.jt16znbwi {
  fill: currentColor;
  d: path("M10.925 14.05L16.6 8.4l-1.425-1.425l-4.25 4.25L8.8 9.1l-1.4 1.4zM1 21v-2h22v2zm1-3V3h20v15zm2-2h16V5H4zm0 0V5z");
}
</style><path class="jt16znbwi"/>`,
		"fallback": "material-symbols:sync-saved-locally-outline-sharp",
	});
}

export default Component;
