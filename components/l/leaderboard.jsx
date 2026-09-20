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
		"content": `<style>.lki_8vbci {
  fill: currentColor;
  d: path("M2 21V9h5.5v12zm7.25 0V3h5.5v18zm7.25 0V11H22v10z");
}
</style><path class="lki_8vbci"/>`,
		"fallback": "material-symbols:leaderboard",
	});
}

export default Component;
